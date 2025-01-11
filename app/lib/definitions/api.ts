export type Messages = string | string[] | { [key: string]: string | string[] };


export type ApiResponse<TApiData> = ApiSucess<TApiData> | ApiError
export interface ApiSucess<TApiData> {
    success: true
    status: number
    message: string
    code: number | string
    data: TApiData
    errors: string[] | string | []
}

export class ApiError extends Error {
    constructor(
        public success: false,
        public status: number,
        message: string,
        public code: number | string,
        public data: null,
        public errors: string[] | string | []

    ) {
        super(message);
        this.name = 'ApiError';

    }
}

// export type NetworkError = {
//     success: false,
//     status: 500,
//     message: "Network error",
//     code: 500,
//     data: null,
//     errors: []
// }
// export type ApiResponseCode =
//     | 200 // OK
//     | 201 // Created
//     | 202 // Accepted
//     | 204 // No Content
//     | 400 // Bad Request
//     | 401 // Unauthorized
//     | 403 // Forbidden
//     | 404 // Not Found
//     | 405 // Method Not Allowed
//     | 409 // Conflict
//     | 422 // Unprocessable Entity
//     | 429 // Too Many Requests
//     | 500 // Internal Server Error
//     | 502 // Bad Gateway
//     | 503 // Service Unavailable
//     | 504 // Gateway Timeout


// export interface ApiResponse<T> {
//     status: number,
//     success: boolean,
//     code: ApiResponseCode,
//     message: string,
//     data: T,
//     errors: []
// }