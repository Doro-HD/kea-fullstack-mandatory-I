import crossEnv from 'cross-env'
import { createClient } from '@supabase/supabase-js'
import express from 'express'
import cookieParser from 'cookie-parser'

const supabase = createClient('https://kfivnxsczsonvtyfufyb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmaXZueHNjenNvbnZ0eWZ1ZnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MDk2MTEsImV4cCI6MTk5NTQ4NTYxMX0.MMIe_FkIsO8K8zo9Q69yHw8V4VRARk4KpzjakXGJk3s')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const cookies = req.cookies
  const { data: articles, error }= await supabase
    .from('article')
    .select('*')
  const articlesSummarized = articles.map(article => ({ id: article.id, title: article.title, summary: article.summary }))

  res.render('index', { articles: articlesSummarized, user: cookies.username })
})

app.get('/articles/:id', async (req, res) => {
  const cookies = req.cookies
  const id = Number(req.params.id)

  const { data: article, error } = await supabase
    .from('article')
    .select('id, title, block(*)')
    .eq('id', id)
    .single()
  
  res.render('article', { 
      title: article.title,
      articleBlocks: article.block,
      user: cookies.username 
    })
})


app.get('/login', (req, res) => {
  const cookies = req.cookies

  if (cookies.username) {
    res.redirect('/')

    return
  }
  
  res.render('login')
})

app.post('/login', (req, res) => {
  const body = req.body

  if (body.username === 'admin' && body.password === 'admin') {
    res
      .cookie('username', body.username,{
        //should expire after 3 hours
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        path: '/'
      })
      .redirect('/')

    return
  }

  res.redirect('/login')
})

app.get('/logout', (req, res) => {
  res
    .clearCookie('username')
    .redirect('/')
})

app.get('/admin/article', (req, res) => {
  const cookies = req.cookies
  if (!cookies.username) {
    res.redirect('/login')

    return
  }

  res.render('articleForm', { user: cookies.username })
})

app.post('/admin/article', (req, res) => {
  const cookies = req.cookies
  if (!cookies.username) {
    res.redirect('/')
  }

  const body = req.body
  console.log(body)
  
  res.redirect('/admin/article')
})

const port = process.env.PORT || 8080 
app.listen(port, () => {
  console.log('Listening on port', port)
})
