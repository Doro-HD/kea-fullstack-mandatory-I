let autoIncrementValue = 1
const articles = []

function addArticle(article) {
  article.id = autoIncrement()
  articles.push(article)
}

function autoIncrement() {
  return autoIncrementValue++  
}

addArticle({
  topic: 'API',
  title: 'API route order',
  summary: 'API route naming convention and how to order your routes',
  content: [
    {
      type: 'paragraf',
      text: 'Having a good convention for not only how to name your API routes but also how to order them makes the developer experience a much smoother ride'
    },
    {
      type: 'paragraf',
      text: 'When designing your api you usually have some form of resource, eg. customers, birds. ' +
            'To make it simple and clean one could define their API routes like so. start by naming the route after the resource, ' +
            'lower case and in plural. Start by defining the get routes, then post, then put and finally delete. If you have routes with the same method ' +
            'then order them so that the ones without path variables are at the bottom.'
    },
    {
      type: 'paragraf',
      text: 'Take the following example'
    },
    {
      type: 'code',
      text: 'get: /birds\n' +
            'get: /birds/<id>\n' +
            'post: /birds\n' +
            'put: /birds/<id>\n' +
            'delete: /birds/<id>'
    },
    {
      type: 'paragraf',
      text: 'However, when I designed my API for our birds assignment, I used a tool designed by swagger for documenting API\'s which enforced a slightly different aproach. ' +
            ''
    }
  ]
})

export default articles
