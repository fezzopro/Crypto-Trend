import { Routes, Route } from 'react-router';
import Nav from './components/Navigation/Navigation';
import Details from './components/Details/Details';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
