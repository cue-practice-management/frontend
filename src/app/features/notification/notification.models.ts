export interface NotificationPayload {
    _id: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
    metadata?: Record<string, any>;
}