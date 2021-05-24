export interface SendRegisterNotifyRequest {
    userId: number;
    email: string;
    displayName: string;
    confirmCode: string;
}

export interface SendRegisterNotifyResponse {
    isMailSent: boolean;
    messageId: string;
}
