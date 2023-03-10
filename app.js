import path from 'path'
import express from 'express'
import articles from './articles.js'

const app = express()
app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const articlesSummarized = articles.map(article => ({ id: article.id, title: article.title, summary: article.summary }))

  res.render('index', { articles: articlesSummarized })
})

app.get('/articles/:id', (req, res) => {
  const id = Number(req.params.id)
  const article = articles.find(article => article.id === id)
  
  res.render('article', { article: article })
})

const port = 8080
app.listen(port, () => {
  console.log('Listening on port', port)
})
