let query = `query ($username: String!, $limit: Int) {
    recentAcSubmissionList(username: $username, limit: $limit) {
        id
        title
        titleSlug
        timestamp
        statusDisplay
        lang
        url
        runtime                        
        memory
    }
}`;

module.exports = query;