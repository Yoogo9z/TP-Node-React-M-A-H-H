import { useEffect, useState } from 'react';
import { fetchBieres, deleteBiere, fetchBar } from '../apiClient';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import { addCommande } from '../apiClient';

const genericBiereImage = 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const handleCommander = async (biere) => {
    try {
        const commande = {
            name: biere.name,
            prix: biere.prix,
            bars_id: biere.bars_id,
            status:'en cours',
        };
        await addCommande(commande);
    } catch (error) {
        console.error('Erreur lors de la création de la commande:', error);
    }
};

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
                                <td style={{ "display": "flex", "flexDirection": "column" }}>
                                    <button className="btn btn-success btn-sm" style={{ "marginBottom": 5 }} onClick={() => handleCommander(biere)}>Commander</button>
                                    <button className="btn btn-danger btn-sm" style={{ "marginBottom": 5 }} onClick={() => handleDelete(biere.id)}>Supprimer</button>
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
