import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import BlogCreate from './components/BlogCreate'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'
import ErrorBoundary from './ErrorBoundary'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <NavBar />
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/create' element={<BlogCreate />} />
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
