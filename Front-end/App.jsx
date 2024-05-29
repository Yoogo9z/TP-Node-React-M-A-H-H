import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BarForm from './components/BarForm';
import BarsList from './pages/bars';
import BieresList from './pages/BieresList';


const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <BarForm></BarForm>
      <div>
        <section className="section">
          <div className="container">
          
          <Routes>
              <Route path="/" element={<BarsList />} />
              <Route path="/bieres" element={<BieresList />} />
          </Routes>
          </div>
        </section>
      
      </div>
      
    
    </Router>
  );
};

export default App;
