export interface NewsResponseData {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface SourcesResponceData {
    status: string;
    sources: NewsSource[];
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

export interface NewsSource {
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
    id: string;
}

export interface ApiOptions {
    apiKey: string;
}
export interface SourceOptions {
    sources: string;
}

export type CallbackGen<T> = (data?: T) => void;
