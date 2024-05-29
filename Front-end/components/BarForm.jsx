import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addBars, updateBar, fetchBar } from "../apiClient.js";

const BarForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [bar, setBar] = useState({
        name: "",
        adresse: "",
        tel: "",
        email: "",
        description: "",
    });

    useEffect(() => {
        if (id) {
            const loadBar = async () => {
                const fetchedBar = await fetchBar(id);
                setBar({
                    name: fetchedBar.name,
                    adresse: fetchedBar.adresse,
                    tel: fetchedBar.tel,
                    email: fetchedBar.email,
                    description: fetchedBar.description,
                });
            };
            loadBar();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBar((prevBar) => ({
            ...prevBar,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateBar(id, bar);
        } else {
            await addBars(bar);
        }
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    name="name"
                    className="form-control"
                    value={bar.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Adresse</label>
                <input
                    name="adresse"
                    className="form-control"
                    value={bar.adresse}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Téléphone</label>
                <input
                    name="tel"
                    className="form-control"
                    value={bar.tel}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    name="email"
                    className="form-control"
                    value={bar.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                    name="description"
                    className="form-control"
                    value={bar.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Enregistrer
            </button>
        </form>
    );
};

export default BarForm;

