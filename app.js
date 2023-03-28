import crossEnv from 'cross-env'
import { createClient } from '@supabase/supabase-js'
import express from 'express'
import cookieParser from 'cookie-parser'
import articles from './articles.js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://kfivnxsczsonvtyfufyb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmaXZueHNjenNvbnZ0eWZ1ZnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MDk2MTEsImV4cCI6MTk5NTQ4NTYxMX0.MMIe_FkIsO8K8zo9Q69yHw8V4VRARk4KpzjakXGJk3s')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
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


app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const body = req.body

  if (body.username === 'admin' && body.password === 'admin') {
    res.cookie('username', body.username,{
      maxAge: 60 * 60 * 3
    })

    res.redirect('/')
  }

  res.redirect('/login')
})

app.get('/admin/article', (req, res) => {
  const cookies = req.cookies
  console.log(cookies)

  res.send(cookies)
})

const port = process.env.PORT || 8080 
app.listen(port, () => {
  console.log('Listening on port', port)
})
