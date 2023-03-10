document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetch('/api/articles').then(res => res.json())
  console.log(data)

  if (data.articles) {
    const contentDiv = document.querySelector('div#content')

    data.articles.forEach(article => {
      const column = document.createElement('div')
      column.classList.add('col')
      column.classList.add('mb-3')

      const card = document.createElement('div')
      card.classList.add('card')
      card.classList.add('text-bg-secondary')

      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')

      const cardTitle = document.createElement('h3')
      cardTitle.classList.add('card-title')
      cardTitle.innerText = article.title
      
      const cardText = document.createElement('p')
      cardText.classList.add('card-text')
      cardText.textContent = article.summary

      const articleLink = document.createElement('a')
      articleLink.classList.add('card-link')
      articleLink.classList.add('link-light')

      articleLink.textContent = 'Read more'
      articleLink.setAttribute('href', '/articles/' + article.id)

      column.appendChild(card)
      card.appendChild(cardBody)
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardText)
      cardBody.appendChild(articleLink)

      contentDiv.appendChild(column)
    })
  }
})