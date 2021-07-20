export interface InsertArticleDocumentRequest {
    title: string;
    abstract: string;
    fullText: string;
    userId: number;
    hubs: number[];
    tags: number[];
    createdAt: Date;
}

export interface InsertHubDocumentRequest {
    id: number;
    name: string;
    description: string;
}

export interface InsertDocumentResponse {
    isDocumentCreated: boolean;
    documentId?: string;
}
