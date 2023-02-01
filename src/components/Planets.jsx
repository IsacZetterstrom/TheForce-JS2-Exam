import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import  InfoCard  from './InfoCard';
import '../App.css';

const Planets = () => {
    const [ planetsBank, setPlanetsBank ] = useState([]);
    const [ planetBank, setPlanetBank] = React.useState(false);

    useEffect(() => {
        fetchPlanets();
    },[]);

    const fetchPlanets = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 6; i++) {
            promises.push(fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
            .then(response => response.json())) 
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setPlanetsBank([].concat(...results));
    }
    const runHandleClick = (planetInfo) => {
        setPlanetBank (`<h3>${planetInfo.name}</h3>
       <p>Rotation time: ${planetInfo.rotation_period} days</p>
       <p>Orbital time: ${planetInfo.orbital_period} days</p>
       <p>Diameter: ${planetInfo.diameter} km</p>
       <p>Climate: ${planetInfo.climate}</p>
       <p>Gravity: ${planetInfo.gravity}</p>
       <p>Terrain: ${planetInfo.terrain}</p>
       <p>Population: ${planetInfo.population}</p>`) 
   }

   return(
       <>
       {planetBank && <InfoCard data={planetBank}/>}
   
           <div className="subcatagory-container">
               <Link to="InfoCard">{planetsBank.map((planet) => 
               <button className="planet-subcategory submenu-btns" key={planet.name} onClick={() => runHandleClick(planet)}>{planet.name}</button>)}</Link>
               
           </div>
       </>

   )
}

export default Planets;