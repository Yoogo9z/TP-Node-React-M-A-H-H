import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <strong>Chez Raoul</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
<<<<<<< HEAD
                        <Link className="nav-link" to="/bieres">Bières</Link>
=======
                            <Link className="nav-link" to="/Bieres">Bieres</Link>
>>>>>>> 8809e994fb0adeb14ed9a68a5ee6aa42fe5b821b
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Commandes">Commandes</Link>
                        </li>
                        <li className="nav-item">
<<<<<<< HEAD
                            <Link className="nav-link" to="/ajouterunbar">Ajouter un bar</Link>
=======
                            <Link className="nav-link" to="/BiereCommandes">Commandes de bieres</Link>
>>>>>>> 8809e994fb0adeb14ed9a68a5ee6aa42fe5b821b
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;