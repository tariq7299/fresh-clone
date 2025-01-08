export type Messages = string | string[] | { [key: string]: string | string[] };


export type ApiResponseCode =
    | 200 // OK
    | 201 // Created
    | 202 // Accepted
    | 204 // No Content
    | 400 // Bad Request
    | 401 // Unauthorized
    | 403 // Forbidden
    | 404 // Not Found
    | 405 // Method Not Allowed
    | 409 // Conflict
    | 422 // Unprocessable Entity
    | 429 // Too Many Requests
    | 500 // Internal Server Error
    | 502 // Bad Gateway
    | 503 // Service Unavailable
    | 504 // Gateway Timeout


export interface ApiResponse<T> {
    status: number,
    success: boolean,
    code: ApiResponseCode,
    message: string,
    data: T,
    errors: []
}