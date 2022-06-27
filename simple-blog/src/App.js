import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import BlogCreate from './components/BlogCreate'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Router>
          <Routes>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <BlogCreate />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
