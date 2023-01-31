import React, {useState, useEffect} from "react";
import '../App.css';

const Species = () => {
    const [ SpeciesBank, setSpeciesBank ] = useState([]);
    useEffect(() => {
        FetchSpecies();
    },[]);
    const FetchSpecies = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/species/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setSpeciesBank([].concat(...results));
    }

    return(
        <div className="subcatagory-container">
        {SpeciesBank.map((specie) => <button className="species-subcategory submenu-btns">{specie.name}</button>)}
        </div>
    )
}

export default Species;