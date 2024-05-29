import { useEffect, useState } from "react";
import { fetchBars } from "../apiClient.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating.jsx";

const BarsListt = () => {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    const loadBars = async () => {
      const barsData = await fetchBars();
      setBars(barsData);
    };
    loadBars();
  }, []);

  const handleDelete = async (id, e) => {
    e.preventDefault();
    await deleteMovie(id);
    setMovies(bars.filter((bar) => bar.id !== id));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {bars.map((bar) => (
          <div className="col-md-3 mb-4" key={bar.id}>
            <Link to={"/bar/" + bar.id} className="card h-100">
              {/*<img src={bar.imageUrl} className="card-img-top" alt={bar.name} />*/}
              <div className="text-center">
                <StarRating rating={bar.rating} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{bar.name}</h5>
                <p className="card-text text-muted small">
                  <span className="card-title">{bar.name}</span>
                  <span className="card-title">{bar.adresse}</span>
                  <span className="card-title">{bar.tel}</span>
                  <span className="card-title">{bar.email}</span>
                  <span className="card-title">{bar.description}</span>

                  <span
                    className="position-absolute"
                    style={{ right: 8, bottom: 8 }}
                  >
                    <Link
                      className="btn btn-success btn-sm me-1"
                      to={"/bieres/bar/" + bar.id}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(event) => handleDelete(bar.id, event)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BarsListt;
