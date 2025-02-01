export function getItemsFromSearchParams(searchParams: URLSearchParams) {
    const items = searchParams.get("items")
    const itemsList = items?.split(",").map(item => item.trim()).filter(item => item !== "") || []
    return itemsList
}


export function createPageURL(pathname: string, searchParams: URLSearchParams) {
    const params = new URLSearchParams(searchParams);
    return `${pathname}?${params.toString()}`;
}