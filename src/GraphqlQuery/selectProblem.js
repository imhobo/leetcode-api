const query = `query ($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
        acRate
        questionId
        questionFrontendId
        title
        titleSlug
        difficulty
        likes
        dislikes
        topicTags {
            name
            slug
        }
        stats
        status
    }
}`;
module.exports = query;