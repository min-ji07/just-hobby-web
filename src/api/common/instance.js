import axios from 'axios';
import { host, protocol } from '../../constants/configurations';
import { debounce } from 'lodash';

class Holder{
    promise;
    resolve;
    reject;

    constructor(){
        this.hold();
    }
    hold(){
        this.promise = new Promise((resolve, reject) => {
            Object.assign(this, {reject, resolve})
        })
    }
}

class ApiService{
    session;
    fileUploadSession;
    #accessToken;

    lock = false;
    holder = new Holder();

    static instance;
    constructor(){}

    static getInstance(){
        console.log('instance => ', this.instance)
        if(!ApiService.instance){
            ApiService.instance = new ApiService();
            // ApiService.instance.setupInterceptors();
        }
        return ApiService.instance;
    }

    setHeader(){
        this.session = axios.create({
            baseURL: `${protocol}://${host}/api`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'server-type': 'just-hobby-web'
            },
            withCredentials: true,
        })

        this.fileUploadSessiont = axios.create({
            baseURL: `${protocol}://${host}/api`,
            headers: {
                'Content-Type': 'multipart/form-data',
                'server-type': 'just-hobby-web'
            },
            withCredentials: true
        });

        this.setupInterceptors();
    }

    setAccessToken(accessToken){
        this.#accessToken = accessToken;
    }
    get(url, config){
        return this.session.get(url, config);
    }
    post(url, data, config){
        return this.session.post(url, data, config)
    }
    postFile(url, data, config){
        return this.fileUploadSession.post(url, data, config)
    }
    put(url, data, config){
        return this.session.put(url, data, config)
    }
    patch(url, data, config){
        return this.session.patch(url, data, config)
    }
    delete(url, config){
        return this.session.delete(url, config)
    }
    externalPut(url, data){
        return axios.put(url, data)
    }
    externalPost(url, data, config){
        return axios.post(url, data, config)
    }

    // debounce ?
    logout = debounce(async (res) => {
        window.sessionStorage.setItem("redirectUrl", window.location.pathname+window.location.search);
        window.location.href='';    // /auth/main
    }, 100);

    setupInterceptors(){
        this.session.interceptors.request.use(
            // refreshToken 요청중일시 요청 대기
            // [] 가로 안 url은 대기하지않음
            async (req) => {
                if(this.lock && (!['/auto/logout', '/auth/sso/refreshToken', '/users/csrf/token'].includes(req.url))) await this.holder.promise;

                // csrf 토큰 헤더 삽입
                if(req.url !== '/users/csrf/token' && (!['get'].includes(req.method))){
                    try{
                        const response = await ApiService.instance.get('/users/csrf/token');
                        req.headers['x-csrf-token'] = response.data._csrf;
                    }catch(e){

                    }
                    // accessToken 헤더 삽입
                    req.headers['Authorization'] = this.#accessToken;
                    return req;
                }
            },
            (err) => {
                console.log(err);
            }
        )
        this.session.interceptors.response.use(
            async res => {
                if(['/auth/sso'].includes(res.config.url)){
                    this.#accessToken = res?.data?.accessToken;
                }
                return Promise.resolve(res);
            },
            async error => {
                if(error.response.status === 401 && ! (['auth/logout', '/auth/sso/refreshToken'].includes(error.config.url))){
                    if(error.response.data.code === 'EINVALIDPAYLOAD'){
                        window.location.href = '/auth/register'
                        return;
                    }
                    // token 만료시 refreshToken 재발급 수행
                    // refreshToken 다중요청 방지
                    try{
                        if(!this.lock){
                            this.lock = true;
                            this.holder.hold();
                            window.sessionStorage.setItem("redirectUrl", window.location.pathname+window.location.search);
                            const response = await ApiService.instance.post('/auth/sso/refreshToken');
                            switch(response.data.result){
                                case 'ok' : {
                                    
                                }
                            }
                        }
                    }
                    catch{
                        console.log('XXXXXXXXXXXXXXXX')
                    }
                }
            }
        )
    }
}