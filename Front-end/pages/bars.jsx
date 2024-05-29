import { useEffect, useState } from 'react';
import { fetchBars } from '../apiClient.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BarsList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const loadBars = async () => {
      const barsData = await fetchBars();
      setBars(barsData);
    };
    loadBars();
  }, []);

  const handleDelete = async (id, event) => {
    event.preventDefault();
    try {
      await axios.delete(`/api/bars/${id}`);
      setBars(bars.filter(bar => bar.id !== id));
    } catch (error) {
      console.error('There was an error deleting the bar!', error);
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        {bars.map(bar => (
          <div className="col-md-3 mb-4" key={bar.id}>
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">{bar.name}</h1>
                <h2 className="card-title">{bar.adresse}</h2>
                <h3 className="card-title">{bar.tel}</h3>
                <h4 className="card-title">{bar.email}</h4>
                <h5 className="card-title">{bar.description}</h5>
                <div className='position-absolute' style={{ right: 8, bottom: 8 }}>
                  <Link className='btn btn-success btn-sm me-1' to={'/bar/' + bar.id}><FontAwesomeIcon icon={faStar} /> Voir détails </Link>
                  <button className='btn btn-danger btn-sm' onClick={(event) => handleDelete(bar.id, event)}><FontAwesomeIcon icon={faTrash} /> Supprimer</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarsList;
