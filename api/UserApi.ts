import {APIRequestContext, APIResponse} from '@playwright/test'

export class UserApi {
    constructor(private apiContext:APIRequestContext){}
    async getUser(userId: number): Promise<APIResponse> {
        return await this.apiContext.get(`/api/users/${userId}`)
    }

    async createUser(name:String, job:String): Promise<APIResponse>{
        return await this.apiContext.post('api/users', {
            data:{
                name,
                job
            }
        })
    }

    async updateUser(userId:number, job:string): Promise <APIResponse>{
        return await this.apiContext.patch(`api/users/${userId}`,{
            data:{
                job
            }
        })
    }
}