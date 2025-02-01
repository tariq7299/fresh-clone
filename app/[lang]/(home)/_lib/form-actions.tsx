"use server"

import { fetchApi } from "@/_lib/utils/api/fetch-utils"
import { pagination } from "@nextui-org/theme"
import { redirect } from "next/dist/server/api-utils"

export const handleSearch = async (data: {
    longitude: number,
    latitude: number,
    categoryId: number
}) => {

    console.log("handleSearch", data)

    const { longitude, latitude, categoryId } = data

    const url = categoryId > 0 ? `/active-businesses?category_id=${categoryId}&latitude=${latitude}&longitude=${longitude}&page=1` : `/active-businesses?latitude=${latitude}&longitude=${longitude}&page=1`
    console.log("url", url)

    const response = await fetchApi(url)

    if (response.success) {
        return response.data
        console.log("SUCESSSSSS", response)
        // redirect("login")
    } else {
        return []

    }


}