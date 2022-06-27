import BlogList from './BlogList'
import useFecth from '../hooks/useFetch'


const Home = () => {

  const { data: blogs, isPending, error } = useFecth('http://localhost:3000/blogs');
  console.log(blogs)
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Chargement...</div>}
      <BlogList blogs={blogs} title="Tous les articles" />
    </div>
  )
}

export default Home