import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import BlogCreate from './components/BlogCreate'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'
import ErrorBoundary from './ErrorBoundary'
import Protection from './components/Protection';

import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [isConnected, setIsConnected] = useState(true)

  const logIn = () => {
    setIsConnected(true)
  }

  const logOut = () => {
    setIsConnected(false)
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <NavBar />
          <div className='content'>
            {isConnected ? (<button onClick={logOut} >Deconnexion</button>) :
              (<button onClick={logIn}>Connexion</button>)}
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/create' element={<Protection isConnected={isConnected}><BlogCreate /></Protection>} />
              <Route path='/blogs/:id' element={<BlogDetails />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
