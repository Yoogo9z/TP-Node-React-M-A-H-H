import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
<<<<<<< HEAD
import BarsList from './pages/BarsList';
import BieresList from './pages/BieresList';
import BarDetails from './pages/BarDetails';
import BarForm from './components/formBar';
import CommandesList from './pages/CommandeList';
=======
import BarForm from './components/formBar';
import BarsList from './pages/bars';

>>>>>>> 8809e994fb0adeb14ed9a68a5ee6aa42fe5b821b

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
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
=======
      <NavBar></NavBar>
      <BarForm></BarForm>
      <div>
        <section className="section">
          <div className="container">
          
          <Routes>
              <Route path="/" element={<BarsList />} />
          </Routes>
          </div>
        </section>
      
      </div>
      
     
>>>>>>> 8809e994fb0adeb14ed9a68a5ee6aa42fe5b821b
    </Router>
  );
};

export default App;
<<<<<<< HEAD
=======

>>>>>>> 8809e994fb0adeb14ed9a68a5ee6aa42fe5b821b
