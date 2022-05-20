import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, About } from './pages'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
