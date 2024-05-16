class UsersApi{
    service;

    constructor(service){
        this.service = service;
    }

    async getMe({ ignoreUnauthorized = false, extractUser = true}){
        const result = await this.service.get(`/users/me`, {
            ...UsersApi(ignoreUnauthorized && {
                validateStatus: status => {
                    return status < 500;
                }
            })
        })
        return extractUser ? result.data.user : result.data;
    }
}