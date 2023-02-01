import React, {useState, useEffect} from "react";
import '../App.css';

const Planets = () => {
    const [ planetsBank, setPlanetsBank ] = useState([]);
    useEffect(() => {
        fetchPlanets();
    },[]);
    const fetchPlanets = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 6; i++) {
            promises.push(fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setPlanetsBank([].concat(...results));
    }
    const handleClick = (planetInfo) => {
        console.log(planetInfo)
    }

    return(
        <div className="subcatagory-container">
        {planetsBank.map((planet) => <button className="Planets-subcategory submenu-btns" 
        key={planet.name} onClick={() => handleClick(planet)}>{planet.name}</button>)}
        </div>
    )
}

export default Planets;