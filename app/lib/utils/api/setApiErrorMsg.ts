// import { AxiosError } from 'axios';
// import { toastApiMsgs } from './toastApiMsgs';
// import axios from 'axios';
// import { ErrorCallback } from '../types';
// import { toast } from '@/components/ui/use-toast'
// import { toast } from "sonner"
import { ApiError } from './fetch-utils';



function setApiErrorMsg({
    errResponse,
    // toast: (props: Toast) => void,
    customErrorMsg = null
    // errorCallback?: ErrorCallback
}: {
    errResponse: ApiError | Error,
    // toast: (props: Toast) => void,
    customErrorMsg?: string | null,
    // errorCallback?: ErrorCallback
}): string | string[] {

    console.log("errResponsesdsd", errResponse)

    if (errResponse instanceof ApiError) {
        // if (axios.isAxiosError(errResponse)) {


        const statusCode = errResponse.status;
        const ErrorCode = errResponse.code;

        let errorMessage = customErrorMsg || errResponse.errors || errResponse.message

        if (statusCode === 401 && errResponse.message === "Unauthenticated.") {
            errorMessage = errorMessage || 'Session expired, please login again!';
            // toastApiMsgs(errorMessage, "destructive");
            // setTimeout(() => {
            //     window.location.href = '/login';
            // }, 4000);
            // errorCallback?.();
            return errorMessage; // Exit the function early
        }

        if (statusCode === 403 && ErrorCode === "NOT_VERIFIED") {
            errorMessage = errorMessage || "Email verification required. Please verify your email first.";
            // toastApiMsgs(errorMessage, "destructive");
            // setTimeout(() => {
            //     window.location.href = '/login';
            // }, 4000);
            // errorCallback?.();
            return errorMessage; // Exit the function early
        }

        switch (statusCode) {
            case 400:
                errorMessage = errorMessage || 'Bad Request: The server could not understand the request';
                break;
            case 404:
                errorMessage = errorMessage || 'Not Found: The requested resource could not be found';
                break;
            case 405:
                errorMessage = errorMessage || 'Method Not Allowed: The method specified in the request is not allowed';
                break;
            case 409:
                errorMessage = errorMessage || 'Conflict: The request could not be completed due to a conflict with the current state of the resource';
                break;
            case 422:
                errorMessage = errorMessage || 'Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors';
                break;
            case 500:
                errorMessage = errorMessage || 'Internal Server Error: The server encountered an unexpected condition';
                break;
            case 502:
                errorMessage = errorMessage || 'Bad Gateway: The server received an invalid response from the upstream server';
                break;
            case 503:
                errorMessage = errorMessage || 'Service Unavailable: The server is currently unable to handle the request';
                break;
            default:
                if (statusCode && statusCode >= 400 && statusCode < 500) {
                    errorMessage = errorMessage || 'Client Error: The request contains bad syntax or cannot be fulfilled';
                } else if (statusCode && statusCode >= 500) {
                    errorMessage = errorMessage || 'Server Error: The server failed to fulfill a valid request';
                } else {
                    errorMessage = errorMessage || 'An unknown error occurred, Please contact support!';
                }
        }

        // if (ErrorCode !== "ERR_CANCELED") {
        //     // toastApiMsgs(errorMessage, "destructive");
        //     return errorMessage
        // }

        return errorMessage

        // errorCallback?.();

    } else {
        console.log(errResponse)
        // toastApiMsgs(errResponse?.message || "Someting went wrong!", "destructive");
        return errResponse?.message || "Someting went wrong!"
        // errorCallback?.();
        // return 

    }
}

export { setApiErrorMsg }