import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const DeleteBar = () => {
    const [bars, setBars] = useState([]);

    useEffect(() => {
        // Charger les bars depuis l'API
        axios.get('/api/bars')
            .then(response => {
                setBars(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the bars!', error);
            });
    }, []);

    const handleDelete = (id, event) => {
        event.preventDefault();
        axios.delete(`/api/bars/${id}`)
            .then(response => {
                setBars(bars.filter(bar => bar.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the bar!', error);
            });
    };

    return (
        <div>
            <h1>Liste des bars</h1>
            {bars.map(bar => (
                <div key={bar.id} className='bar-item position-relative'>
                    <h3>{bar.name}</h3>
                    <p>{bar.description}</p>
                    <span className='position-absolute' style={{ right: 8, bottom: 8 }}>
                        <Link className='btn btn-success btn-sm me-1' to={'/bar/' + bar.id}>
                            <FontAwesomeIcon icon={faStar} /> Voir détails
                        </Link>
                        <button
                            className='btn btn-danger btn-sm'
                            onClick={(event) => handleDelete(bar.id, event)}
                        >
                            <FontAwesomeIcon icon={faTrash} /> Supprimer
                        </button>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default DeleteBar;
