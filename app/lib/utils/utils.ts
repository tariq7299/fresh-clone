import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SuccessFormState, ErrorFormState } from "@/lib/definitions/definitions";
import { toastApiMsgs } from "@/lib/utils/api/toastApiMsgs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export function handleFormResponse<ApiDataResponseType, ClientFieldsErrors, FormData>
  ({
    formState,
    successCallback,
    errorCallback,
    showSuccessToast = true,
    showErrorToast = true,
  }: {
    formState: SuccessFormState<ApiDataResponseType, FormData> | ErrorFormState<ClientFieldsErrors, FormData>,
    successCallback?: (apiDataResponse: ApiDataResponseType) => void,
    errorCallback?: () => void,
    showSuccessToast?: boolean,
    showErrorToast?: boolean
  }) {
  if (formState.success) {
    if (formState.apiMsgs && showSuccessToast) {
      toastApiMsgs(formState.apiMsgs, "success");
    }
    successCallback?.(formState.apiDataResponse);
  } else {
    if (formState.apiMsgs && showErrorToast) {
      toastApiMsgs(formState.apiMsgs, "destructive");
    }
    errorCallback?.();
  }
}

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};