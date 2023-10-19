import { BaseResponse } from "./BaseResponse"

export const ValidarResponse = async (res: any): Promise<any> => {
    if (res.status === 204) {
        const response = new BaseResponse();
        response.statusCode = res.data?.status || res.status;
        response.message = res.data?.message || res.message;
        return response;
    } else if (res.status === 200 && !res.data) {
        return new BaseResponse();
    } else if (res.status === 200 && res.data) {
        return res.data
    } else if (res.status === 201) {
        const response = new BaseResponse();
        response.statusCode = res.data?.status || res.status;
        response.message = res.data?.message || res.message;
    }
}