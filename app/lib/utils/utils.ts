import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FormState, SuccessFormState, ErrorFormState } from "@/lib/definitions/definitions";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export function handleFormResponse<ApiDataResponseType, ClientFieldsErrors>
  (formState: SuccessFormState<ApiDataResponseType> | ErrorFormState<ClientFieldsErrors>,
    successCallback?: (apiDataResponse: ApiDataResponseType) => void,
    errorCallback?: () => void) {
  // if (!formState.apiMsgs && !formState.clientFieldsErrors && !formState.apiDataResponse && !formState.formData) return;
  if (formState.success) {
    if (formState.apiMsgs) {
      toastApiMsgs(formState.apiMsgs, "success");
    }
    successCallback?.(formState.apiDataResponse);
  } else {
    if (formState.apiMsgs) {
      toastApiMsgs(formState.apiMsgs, "destructive");
      errorCallback?.();
    }
  }
}