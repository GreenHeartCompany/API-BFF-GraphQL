import { BaseResponse } from "./BaseResponse"

export const ValidarResponse = async (res: any): Promise<any> => {
    if (res.status === 204) {
        return new BaseResponse();
    } else if (res.status === 200 && res.data) {
        return res.data
    }
}