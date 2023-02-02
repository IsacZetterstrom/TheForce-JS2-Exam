import React, {useState, useEffect} from "react";
import '../App.css';

const Vehicles = () => {
    const [ vehiclesBank, setVehiclesBank ] = useState([]);
    const [ vehicleBank, setVehicleBank] = useState([]);

    useEffect(() => {
        fetchVehicles();
    },[]);
    
    const fetchVehicles = async () =>  {
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/vehicles/?page=${currentPage}`)
            .then(response => response.json())) 
            currentPage++;
        }
        let result = await Promise.all(promises);
        let stepTwoResult = result.map(data => data.results)
        setVehiclesBank([].concat(...stepTwoResult));
    }
    const runHandleClick = (vehicleInfo) => {
        setVehicleBank (`<h3>${vehicleInfo.name}</h3>
       <p>Model: ${vehicleInfo.model}</p>
       <p>Manufacturer: ${vehicleInfo.manufacturer}</p>
       <p>Length: ${vehicleInfo.length} m</p>
       <p>Crew: ${vehicleInfo.crew}</p>
       <p>Passengers: ${vehicleInfo.passengers}</p>
       <p>Cargo capacity: ${vehicleInfo.cargo_capacity} ton</p>
       <p>Cost: ${vehicleInfo.cost_in_credits} credits</p>`) 
   }

   return(
       <>
        <div className="information-container">
            <div className="info-text" dangerouslySetInnerHTML={{__html: vehicleBank}}></div>
            </div>
           <div className="subcatagory-container">
            {vehiclesBank.map((vehicle) => <button className="vehicle-subcategory submenu-btns" key={vehicle.name} onClick={() => runHandleClick(vehicle)}>{vehicle.name}</button>)}
 
           </div>
       </>

   )
}
export default Vehicles;