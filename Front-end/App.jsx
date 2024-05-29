import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BarsList from './pages/BarsList';
import BieresList from './pages/BieresList';
import BarDetails from './pages/BarDetails';
import BarForm from './components/formBar';
import CommandesList from './pages/CommandeList';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <section className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<BarsList />} />
              <Route path="/bieres" element={<BieresList />} />
              <Route path="/bars/:id" element={<BarDetails />} />
              <Route path="/ajouterunbar" element={<BarForm />} />
              <Route path="/commandes" element={<CommandesList />} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
