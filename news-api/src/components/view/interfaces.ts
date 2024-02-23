export interface NewsResponseData {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface NewsArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: {
        id: string;
        name: string;
    };
}
