import React, {useState, useEffect} from "react";
import '../App.css';

const Vehicles = () => {
    const [ VehiclesBank, setVehiclesBank ] = useState([]);
    useEffect(() => {
        FetchVehicles();
    },[]);
    const FetchVehicles = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/vehicles/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setVehiclesBank([].concat(...results));
    }

    return(
        <div className="subcatagory-container">
        {VehiclesBank.map((vehicle) => <button className="Vehicles-subcategory submenu-btns">{vehicle.name}</button>)}
        </div>
    )
}
export default Vehicles;