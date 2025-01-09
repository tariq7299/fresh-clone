// This is the generic type of the form state 
// It will be used to define the type of the form state in any form
export interface FormState<ApiDataResponse, ClientFieldsErrors> {
    success: boolean;
    clientFieldsErrors: ClientFieldsErrors;
    apiDataResponse: ApiDataResponse;
    apiMsgs: string | string[];
}


export type SuccessFormState<ApiDataResponse> = FormState<ApiDataResponse, null> & {
    success: true;
    clientFieldsErrors: null;
    apiDataResponse: ApiDataResponse;
    apiMsgs: string | string[];
}

export type ErrorFormState<ClientFieldsErrors> = FormState<null, ClientFieldsErrors> & {
    success: false;
    clientFieldsErrors: ClientFieldsErrors;
    apiDataResponse: null;
    apiMsgs: string | string[];
}