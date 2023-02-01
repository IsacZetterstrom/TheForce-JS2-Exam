import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import  InfoCard  from './InfoCard';

const Vehicles = () => {
    const [ VehiclesBank, setVehiclesBank ] = useState([]);
    const [ vehicleBank, setVehicleBank] = React.useState(false);

    useEffect(() => {
        FetchVehicles();
    },[]);
    
    const FetchVehicles = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/vehicles/?page=${currentPage}`)
            .then(response => response.json())) 
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setVehiclesBank([].concat(...results));
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
       {vehicleBank && <InfoCard data={vehicleBank}/>}
   
           <div className="subcatagory-container">
               <Link to="InfoCard">{VehiclesBank.map((vehicle) => 
               <button className="vehicle-subcategory submenu-btns" key={vehicle.name} onClick={() => runHandleClick(vehicle)}>{vehicle.name}</button>)}</Link>
 
           </div>
       </>

   )
}
export default Vehicles;