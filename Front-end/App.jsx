import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BarsList from './pages/bars'


const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <div>
        <section className="section">
          <div className="container">
           <Routes>
              <Route path="/" element={<BarsList />} />
            </Routes>
          </div>
        </section>
      
      </div>
     
    </Router>
  );
};

export default App;

