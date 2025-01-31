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