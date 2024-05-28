
import { useEffect, useState } from 'react';
import  {fetchBars} from '../apiClient.js';


const BarsList = () => {
 
  const [bars, setBars] = useState([]);
  useEffect(() => {
    const loadBars = async () => {
      const barsData = await fetchBars();
      setBars(barsData);
    };
    loadBars();
  }, []);
  return (
    <div className="container my-4">
      <div className="row">
        test
        {bars.map(bar => (
            <div className="col-md-3 mb-4" key={bar.id}>
            
                <div className="card-body">
                  <h1 className="card-title">{bar.name}name</h1>
                  <h2 className="card-title">{bar.adresse}adresse</h2>
                  <h3 className="card-title">{bar.tel}tel</h3>
                  <h4 className="card-title">{bar.email}email</h4>
                  <h5 className="card-title">{bar.description}description</h5>
                </div>
             
            </div>
         ))}
      </div>
    </div>
  );
};
 
export default BarsList;
 