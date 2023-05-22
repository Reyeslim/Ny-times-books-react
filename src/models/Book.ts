import { NyTimesCategoryResult } from './category'

export type NyTimesBookResult = {
  age_group: string
  amazon_product_url: string
  article_chapter_link: string
  asterisk: number
  author: string
  book_image: string
  book_image_height: number
  book_image_width: number
  book_review_link: string
  book_uri: string
  buy_links: Array<{ name: string; url: string }>
  contributor: string
  contributor_note: string
  dagger: number
  description: string
  first_chapter_link: string
  price: string
  primary_isbn10: string
  primary_isbn13: string
  publisher: string
  rank: number
  rank_last_week: number
  sunday_review_link: string
  title: string
  weeks_on_list: number
}

export type NyTimesBooksResponse = {
  copyright: string
  last_modified: string
  num_results: number
  results: NyTimesCategoryResult & {
    bestsellers_date: string
    books: NyTimesBookResult[]
  }
  status: 'OK'
}
export const normalizeBook = (input: NyTimesBookResult) => ({
  title: input?.title || '',
  image: input?.book_image || '',
  author: input?.author || '',
  contributor: input?.contributor || '',
})

export type Book = ReturnType<typeof normalizeBook>
