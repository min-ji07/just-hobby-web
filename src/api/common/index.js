import apiServies from './instance';

class CommonApi{
    service;

    constructor(service){
        this.service = service;
    }

    // async getSandboxURL(codeKey){
    //     const { data } = await this.service.get('/platforms/common/code/key', {
    //         params: {
    //             codeKey,
    //         }
    //     });

    //     return data;
    // }

    // async getCode(codeKey){
    //     const { data } = await this.service.get('/platforms/common/code/key', {
    //         params: {
    //             codeKey
    //         }
    //     })
    //     return data;
    // }
    
}

export default new CommonApi(apiServies);