export interface NewsItem {
    uid?: string;
    backgroundImg?: string;
    pageImg?: string;
    title?: string;
    isNews?: boolean;
    date?: string | null;
    numberOfViews?: number;
    content?: string;
    author?: string;
    isInitiative?: boolean;
    initiativeNumber?: number;
    initiativeSubtitle?: string;
}