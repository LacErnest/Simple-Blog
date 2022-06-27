import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const BlogCreate = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Ernest')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDeafault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      history.push('/')
    })
  }

  return (
    <div className='blog-create'>
      <h2>Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Contenu</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
        <label>Auteur</label>
        <input type='text' required value={author} onChange={(e) => setTitle(e.target.value)} />
        {!isPending && <button>Ajouter article</button>}
        {isPending && <button disabled>Ajout en Cours...</button>}
      </form>
    </div>
  )
}