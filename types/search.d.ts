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

export interface UpdateHubStatsRequest {
    documentId: string;
    articlesCount: number;
    tagsCount: number;
}

export interface InsertTagDocumentRequest {
    id: number;
    hubId: number;
    hubDocumentId: string;
    name: string;
    description: string;
}

export interface InsertDocumentResponse {
    isDocumentCreated: boolean;
    documentId?: string;
}

export interface UpdateDocumentResponse {
    isDocumentUpdated: boolean;
    version?: number;
}
