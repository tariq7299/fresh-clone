import { ApiResponse } from "./api";

// Base form state interface that represents the common structure for all form states
export interface BaseFormState<TData, TErrors, TFormData> {
    success: boolean;
    clientFieldsErrors: TErrors;
    apiDataResponse: TData;
    apiMsgs: string | string[];
    formData: TFormData;
}

// Success form state with valid API response data and no client errors
export type SuccessFormState<TData, TFormData> = {
    apiResponse?: ApiResponse<any>;
    success: true;
    clientFieldsErrors: null;
    apiDataResponse: TData;
    apiMsgs: string | string[];
    formData: TFormData;
}

// Error form state with client validation errors and no API response
export type ErrorFormState<TErrors, TFormData> = {
    apiResponse?: ApiResponse<any>;
    success: false;
    clientFieldsErrors: TErrors;
    apiDataResponse: null;
    apiMsgs: string | string[] | { [key: string]: any };
    formData: TFormData;
}

// Union type representing either success or error state
export type FormState<TData, TErrors, TFormData> =
    | SuccessFormState<TData, TFormData>
    | ErrorFormState<TErrors, TFormData>;


export interface Pagination {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;

    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
};