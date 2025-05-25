
export function toAbsolutePath(path: string): string {
    if (!path) {
        return '';
    }
    return `/${path}`
}