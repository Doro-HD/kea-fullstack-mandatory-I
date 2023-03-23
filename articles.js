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
            'patch: /birds/<id>\n' +
            'delete: /birds/<id>'
    },
    {
      type: 'paragraf',
      text: 'However, when I designed my API for our birds assignment, I used a tool designed by swagger for documenting API\'s which enforced a slightly different aproach.'
    },
    {
      type: 'heading',
      text: 'SwaggerHub route ordering'
    },
    {
      type: 'paragraf',
      text: 'SwaggerHub is a web application that allows developers to create documentation for their API\'s via a yaml file they write in the browser. Defining routes in this yaml file is quite easy, see the below example.'
    },
    {
      type: 'code',
      text: 'paths:\n' +
            '  /birds:\n' +
            '    get:\n' +
            '      responses:\n' +
            '        200:\n' +
            '          ...\n' +
            '    post:\n' +
            '      ...'
    },
    {
      type: 'paragraf',
      text: 'On SwaggerHub routes, or paths, are defined before the method, meaning that the route order mentioned in the beginning of this article is not possible. See the example below or the provided link for the ordering enforced by SwaggerHub.'
    },
    {
      type: 'link',
      text: 'API documentation made with Swagger hub',
      url: 'https://app.swaggerhub.com/apis-docs/Doro-HD/Birds_API/1.0.0'
    },
    {
      type: 'code',
      text: 'get: /birds\n' +
            'post: /birds\n' +
            'get: /birds/<id>\n' +
            'put: /birds/<id>\n' +
            'patch: /birds/<id>\n' +
            'delete: /birds/<id>'
    },
    {
      type: 'heading',
      text: 'Conclusion'
    },
    {
      type: 'paragraf',
      text: 'No matter the ordering used, the importance as I have come to understand it is that the team designing the API and the end users can easily navigate the documentation and understand the workins of the API.'
    }
  ]
})

export default articles
