type NyTimesCategoriesResponse = {
    copyright: string,
    num_results: number,
    results: Array<{
        display_name: string,
        list_name: string,
        list_name_encoded: string,
        newest_published_date: string,
        oldest_published_date: string,
        updated: string
    }>,
    status: "OK"
}

export const getNyCategories = async () => {
    const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=spsk5Ygzx4Db0WUZO8VOo80rHvWXe0aK`
    )
    const data: NyTimesCategoriesResponse = await response.json()
    console.log(data)
}