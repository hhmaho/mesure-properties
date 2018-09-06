var crel = require('crel')

function renderArticle(article) {
    return crel('div',
crel('h1', article.title),
crel('img', {src:"123"}),
crel('p', article.content)
)
}

function renderArticles(articles) {
    return crel('div',
    articles.map(renderArticle)
)
}

module.exports = renderArticles