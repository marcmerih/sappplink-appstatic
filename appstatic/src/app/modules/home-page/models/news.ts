export interface NewsItem {
    backgroundImg: string;
    pageImg?: string;
    title: string;
    isNews: boolean;
    date: string | null;
    numberOfViews: number;
    content?: string;
    author?: string;
}