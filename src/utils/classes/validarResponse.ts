import { BaseResponse } from "./BaseResponse"

export const ValidarResponse = async (res: any): Promise<any> => {
    if (res.statusCode === 204) {
        return new BaseResponse();
    }
}