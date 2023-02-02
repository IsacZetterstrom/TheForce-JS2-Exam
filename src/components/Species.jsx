import React, {useState, useEffect} from "react";
import '../App.css';

const Species = () => {
    const [ speciesBank, setSpeciesBank ] = useState([]);
    const [ specieBank, setSpecieBank] = useState([]);

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
        let stepTwoResult = result.map(data => data.results)
        setSpeciesBank([].concat(...stepTwoResult));
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
            <div className="information-container">
            <div className="info-text" dangerouslySetInnerHTML={{__html: specieBank}}></div>
            </div>
           <div className="subcatagory-container">
               {speciesBank.map((species) => <button className="species-subcategory submenu-btns" key={species.name} onClick={() => runHandleClick(species)}>{species.name}</button>)}
               
           </div>
       </>

   )
}

export default Species;