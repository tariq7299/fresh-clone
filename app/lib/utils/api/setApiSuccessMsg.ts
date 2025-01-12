// import { SuccessApiResponse } from '../types';
import { toastApiMsgs } from './toastApiMsgs';
// import { SuccessCallback } from '../types';
import { ApiResponse } from '@/lib/definitions/api';

function setApiSuccessMsg<T>({
    successResponse,
    // showToast = true,
    customSuccessMsg = null,
    // successCallback?: SuccessCallback,
}: {
    successResponse: ApiResponse<T>,
    // showToast: boolean,
    customSuccessMsg?: string | null,
    // successCallback?: SuccessCallback,
}): string {


    const { code: statusCode, success, message } = successResponse;

    if (!success) {
        throw new Error('An unknown error occurred. Please contact support!');
    }

    // if (showToast) {

    let successMessage = customSuccessMsg || message;
    const defaultMessages: Record<number, string> = {
        200: 'Successful! Your request has succeeded.',
        201: 'Created: The resource was successfully created.',
        202: 'Accepted: Your request is being processed.',
        204: 'Successful! The request was processed with no content to return.',
    };

    // if statusCode is a string, it means it's a status code number
    const statusCodeNumber = typeof statusCode === 'string' ? 200 : statusCode;

    successMessage = successMessage || defaultMessages[statusCodeNumber] || 'Successful! Your request has succeeded.';

    if (statusCodeNumber < 200 || statusCodeNumber >= 300) {
        throw new Error('An unexpected status code was received. Please contact support!');
    }
    // toastApiMsgs(successMessage, "success");
    return successMessage
    // }

    // successCallback?.();

    // return successResponse?.data
}


export { setApiSuccessMsg };