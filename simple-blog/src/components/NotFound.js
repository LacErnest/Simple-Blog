import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <p>Page Introuvable !</p>
      <Link to='/'>Revenir à la page d'accueil</Link>
    </div>
  )
}


export default NotFound