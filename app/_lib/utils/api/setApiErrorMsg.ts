import { ApiError } from '@/_lib/definitions/api';


function setApiErrorMsg({
    errResponse,
    customErrorMsg = null
}: {
    errResponse: ApiError,
    customErrorMsg?: string | null,
}): string | string[] {

    console.log("errResponse", errResponse)

    const statusCode = errResponse.code;
    const ErrorCode = errResponse.code;

    let errorMessage = customErrorMsg || (errResponse.errors && Object.keys(errResponse.errors).length > 0 ? errResponse.errors : null) || errResponse.message

    console.log("errorMessage", errorMessage)

    if (statusCode === 401 && errResponse.message === "Unauthenticated.") {
        errorMessage = 'Session expired';
        return errorMessage; // Exit the function early
    }

    if (statusCode === 403 && ErrorCode === "NOT_VERIFIED") {
        errorMessage = errorMessage || "Email verification required. Please verify your email first.";
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
            if ((statusCode && Number(statusCode) >= 400 && Number(statusCode) < 500)) {
                errorMessage = errorMessage || 'Client Error: The request contains bad syntax or cannot be fulfilled';
            } else if (statusCode && Number(statusCode) >= 500) {
                errorMessage = errorMessage || 'Server Error: The server failed to fulfill a valid request';
            } else {
                errorMessage = errorMessage || 'An unknown error occurred, Please contact support!';
            }
    }

    return errorMessage

}

export { setApiErrorMsg }