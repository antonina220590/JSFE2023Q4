export interface IResponseData {
  status: string,
  totalResults: number,
  articles: IArticle[]
}

export interface IArticle {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  title: string,
  url: string,
  urlToImage: string,
  sources: ISource[]
}

export interface ISource {
  id: string,
  name: string
}