import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h2>Auteur:  {blog.author}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList