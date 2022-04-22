export function getStarsByRating(rating) {
    if (rating <= 2) {
        return '★'
    }
    if (rating <= 4) {
        return '★★'
    }
    if (rating <= 6) {
        return '★★★'
    }
    if (rating <= 8) {
        return '★★★★'
    }
    return '★★★★★'
}
