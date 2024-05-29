import React, { useEffect, useState } from 'react';
import { fetchCommandes, deleteCommande, fetchBar } from '../apiClient';  // Assurez-vous que l'import du nom est correct

const CommandesList = () => {
    const [commandes, setCommandes] = useState([]);
    const [barNames, setBarNames] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCommandes = async () => {
            try {
                const commandesData = await fetchCommandes();
                setCommandes(commandesData);
            } catch (error) {
                console.error('Error fetching commandes:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        loadCommandes();
    }, []);

    useEffect(() => {
        const loadBarNames = async () => {
            const names = {};
            try {
                await Promise.all(commandes.map(async (commande) => {
                    try {
                        const barData = await fetchBar(commande.bars_id);
                        names[commande.id] = barData.name;
                    } catch (error) {
                        console.error('Error fetching bar name:', error);
                        names[commande.id] = 'Nom de bar non disponible';
                    }
                }));
                setBarNames(names);
            } catch (error) {
                console.error('Error loading bar names:', error);
                setError(error);
            }
        };
        if (commandes.length > 0) {
            loadBarNames();
        }
    }, [commandes]);

    const handleDelete = async (id) => {
        try {
            await deleteCommande(id);
            setCommandes(commandes.filter(commande => commande.id !== id));
        } catch (error) {
            console.error('Error deleting commande:', error);
            setError(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container my-4">
            <h2 className="mb-4">Commandes</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Bar</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commandes.map(commande => (
                            <tr key={commande.id}>
                                <td>{commande.name}</td>
                                <td>{commande.prix}</td>
                                <td>{barNames[commande.id]}</td>
                                <td>{new Date(commande.date).toLocaleString()}</td>
                                <td>{commande.status}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(commande.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommandesList;
