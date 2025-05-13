export interface ModalConfig<T = any> {
    data?: T;
    width?: string;
    closeOnEsc?: boolean;
    closeOnBackdropClick?: boolean;
}