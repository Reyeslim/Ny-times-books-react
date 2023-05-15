export type NyTimesCategoryResult = {
    display_name: string
    list_name: string
    list_name_encoded: string
    newest_published_date: string
    oldest_published_date: string
    updated: string
}

export type NyTimesCategoriesResponse = {
    copyright: string
    num_results: number
    results: NyTimesCategoryResult[]
    status: 'OK'
}

export const normalizeCategory = (input: NyTimesCategoryResult) => ({
    title: input?.display_name || "",
    key: input?.list_name_encoded || "",
    updated: input?.updated || "",
    newestPublishedDate: input?.newest_published_date || "",
    oldestPublishedDate: input?.oldest_published_date || "",
})

export type Category = ReturnType<typeof normalizeCategory>