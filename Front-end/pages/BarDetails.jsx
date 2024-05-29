import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBar } from '../apiClient.js';

const BarDetails = () => {
    const { id } = useParams();
    const [bar, setBar] = useState(null);

    useEffect(() => {
        const loadBarDetails = async () => {
            const barData = await fetchBar(id);
            setBar(barData);
        };
        loadBarDetails();
    }, [id]);

    if (!bar) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{bar.name}</h1>
                    <h2 className="card-title">{bar.adresse}</h2>
                    <h3 className="card-title">{bar.tel}</h3>
                    <h4 className="card-title">{bar.email}</h4>
                    <h5 className="card-title">{bar.description}</h5>
                </div>
            </div>
        </div>
    );
};


export default BarDetails;
