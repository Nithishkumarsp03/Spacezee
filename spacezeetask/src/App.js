import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/header/header';
import Home from './pages/home/home';

function App() {
  return (
    <Router>

      <Header />

        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>

    </Router>
  );
}

export default App;
