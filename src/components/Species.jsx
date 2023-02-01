import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import  InfoCard  from './InfoCard';
import '../App.css';

const Species = () => {
    const [ speciesBank, setSpeciesBank ] = useState([]);
    const [ specieBank, setSpecieBank] = React.useState(false);

    useEffect(() => {
        fetchFilms();
    },[]);
    
    const fetchFilms = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/species/?page=${currentPage}`)
            .then(response => response.json())) 
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setSpeciesBank([].concat(...results));
    }
    const runHandleClick = (specieInfo) => {
        setSpecieBank (`<h3>${specieInfo.name}</h3>
        <p>classification: ${specieInfo.classification}</p>
       <p>Height: ${specieInfo.average_height} cm</p>
       <p>Hair color: ${specieInfo.hair_colors}</p>
       <p>Skin color: ${specieInfo.skin_colors}</p>
       <p>Eye color: ${specieInfo.eye_colors}</p>
       <p>average lifespan year: ${specieInfo.average_lifespan} years</p>
       `) 

   }

   return(
       <>
       {specieBank && <InfoCard data={specieBank}/>}
   
           <div className="subcatagory-container">
               <Link to="InfoCard">{speciesBank.map((species) => 
               <button className="species-subcategory submenu-btns" key={species.name} onClick={() => runHandleClick(species)}>{species.name}</button>)}</Link>
               
           </div>
       </>

   )
}

export default Species;