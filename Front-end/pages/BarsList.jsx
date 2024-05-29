import { useEffect, useState } from 'react';
import { fetchBars, deleteBar } from '../apiClient.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const genericBarImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/HK_Central_%E6%93%BA%E8%8A%B1%E8%A1%97_Lyndhurst_Terrace_sidewalk_restuarant_bar_table_n_chairs_n_tender_Oct-2011.jpg/640px-HK_Central_%E6%93%BA%E8%8A%B1%E8%A1%97_Lyndhurst_Terrace_sidewalk_restuarant_bar_table_n_chairs_n_tender_Oct-2011.jpg';

const BarsList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const loadBars = async () => {
      const barsData = await fetchBars();
      setBars(barsData);
    };
    loadBars();
  }, []);

  const handleDelete = async (id) => {
    await deleteBar(id);
    setBars(bars.filter(bar => bar.id !== id));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {bars.map(bar => (
          <div className="col-md-3 mb-4" key={bar.id}>
            <div className="card" >
              <img src={genericBarImage} className="card-img-top" alt="Bar" />
              <div className="card-body">
                <h5 className="card-title">{bar.name}</h5>
                <div className='buttons' style={{ right: 8, bottom: 8 }}>
                  <Link className='btn btn-success btn-sm me-1' to={'/bars/' + bar.id}><FontAwesomeIcon icon={faStar} /> Voir détails </Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(bar.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Supprimer </button>
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