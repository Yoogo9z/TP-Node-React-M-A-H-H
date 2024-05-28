import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <NavBar />

    </Router>
  );
};

export default App;