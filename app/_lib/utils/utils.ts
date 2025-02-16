import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SuccessFormState, ErrorFormState } from "@/_lib/definitions/definitions";
import { toastApiMsgs } from "@/_lib/utils/api/toastApiMsgs";

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
    if (formState.apiMsgs && showErrorToast && formState.apiMsgs !== "Session expired") {
      toastApiMsgs(formState.apiMsgs, "destructive");
    }
    errorCallback?.();
  }
}

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// convert total duration in minutes to hours and mins
export function getTotalDuration(totalDuration: number, lang: "en" | "ar") {
  const hours = Math.floor(totalDuration / 60)
  const mins = totalDuration % 60
  if (mins === 0) {
    return lang === "en" ? `${hours} hour(s)` : `${hours} ساعة`
  }
  return lang === "en" ? `${hours} hour(s) ${mins} min(s)` : `${hours} ساعة ${mins} دقيقة `
}

export const getMonthName = (month: number, lang: "en" | "ar") => {
  const months = lang === "en" ? {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  } : {
    1: "يناير",
    2: "فبراير",
    3: "مارس",
    4: "أبريل",
    5: "مايو",
    6: "يونيو",
    7: "يوليو",
    8: "أغسطس",
    9: "سبتمبر",
    10: "أكتوبر",
    11: "نوفمبر",
    12: "ديسمبر"
  }
  return months[month as keyof typeof months]
}
