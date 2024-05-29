import { useEffect, useState } from 'react';
import { fetchBieres, deleteBiere, fetchBar } from '../apiClient';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import BarDetails from './BarDetails';

const genericBiereImage = 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


const BieresList = () => {
    const [bieres, setBieres] = useState([]);
    const [barNames, setBarNames] = useState({});

    useEffect(() => {
        const loadBieres = async () => {
            const bieresData = await fetchBieres();
            setBieres(bieresData);
        };
        loadBieres();
    }, []);

    useEffect(() => {
        const loadBarNames = async () => {
            const names = {};
            await Promise.all(bieres.map(async (biere) => {
                try {
                    const barData = await fetchBar(biere.bars_id);
                    names[biere.id] = barData.name;
                } catch (error) {
                    console.error('Erreur lors de la récupération du nom du bar:', error);
                    names[biere.id] = 'Nom de bar non disponible';
                }
            }));
            setBarNames(names);
        };
        loadBarNames();
    }, [bieres]);

    const handleDelete = async (id) => {
        await deleteBiere(id);
        setBieres(bieres.filter(biere => biere.id !== id));
    };

    return (
        <div className="container my-4">
            <h2 className="mb-4">Biere</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Degré</th>
                            <th>Prix</th>
                            <th>Disponible dans les bars suivants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bieres.map(biere => (
                            <tr key={biere.id}>
                                <td style={{ width: '100px' }}> <img src={genericBiereImage} className="card-img-top" alt="Bière" /></td>
                                <td>{biere.name}</td>
                                <td>{biere.description}</td>
                                <td>{biere.degree}</td>
                                <td>{biere.prix}</td>
                                <td>{barNames[biere.id]}</td>
                                <td>
                                    <button className="btn btn-info btn-sm me-2" onClick={() => setSelectedBiere(biere)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(biere.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BieresList;
