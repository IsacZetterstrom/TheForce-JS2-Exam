import React, {useState, useEffect} from "react";
import '../App.css';

const Planets = () => {
    const [ PlanetsBank, setPlanetsBank ] = useState([]);
    useEffect(() => {
        FetchPlanets();
    },[]);
    const FetchPlanets = async () =>  {
        
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

    return(
        <div className="subcatagory-container">
        {PlanetsBank.map((planet) => <button className="Planets-subcategory submenu-btns">{planet.name}</button>)}
        </div>
    )
}

export default Planets;