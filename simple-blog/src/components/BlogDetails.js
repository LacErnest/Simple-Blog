import { useParams, useHistory } from 'react-router-dom'

import useFecth from '../hooks/useFetch'

const BloDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFecth(`http://localost:3000/blogs/${id}`)
  const history = useHistory()

  const handleClick = () => {
    fetch(`http://localhost:3000/blog/${blog.id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog.title}</h2>
        <p>Auteur: {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Supprimer</button>
      </article>
    </div>
  )
}