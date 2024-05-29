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
    setBar((prevBars) => ({
    ...prevBars,
    [name]: value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
    await updateBar(id, movie);
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
        className="form-control"
        value={bar.name}
        onChange={handleChange}
        />
    </div>
    <div className="mb-3">
        <label className="form-label">Adresse</label>
        <input
        className="form-control"
        value={bar.adresse}
        onChange={handleChange}
        />
    </div>
    <div className="mb-3">
        <label className="form-label">Téléphone</label>
        <input
        className="form-control"
        value={bar.tel}
        onChange={handleChange}
        />
    </div>
    <div className="mb-3">
        <label className="form-label">Email</label>
        <input
        className="form-control"
        value={bar.email}
        onChange={handleChange}
        />
    </div>
    <div className="mb-3">
        <label className="form-label">Description</label>
        <input
        className="form-control"
        value={bar.description}
        onChange={handleChange}
        />
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Enregistrer
    </button>
    </form>
);
};

export default BarForm;
