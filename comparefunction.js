export function compareWithLength(a, b) {
    if (a.length === b.length) {
        return 0;
    }
    return a.length < b.length ? -1 : 1;
}