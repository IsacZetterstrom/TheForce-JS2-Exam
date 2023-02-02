import React, {useState, useEffect} from "react";
import '../App.css';

const Starships = () => {
    const [ StarshipsBank, setStarshipsBank ] = useState([]);
    const [ starshipBank, setStarshipBank] = useState([]);

    useEffect(() => {
        fetchStarships();
    },[]);
    
    const fetchStarships = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
            .then(response => response.json())) 
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setStarshipsBank([].concat(...results));
    }
    const runHandleClick = (starshipInfo) => {
        setStarshipBank (`<h3>${starshipInfo.name}</h3>
       <p>Model: ${starshipInfo.model} cm</p>
       <p>Starship class: ${starshipInfo.starship_class}</p>
       <p>Manufacturer: ${starshipInfo.manufacturer} kg</p>
       <p>Max Atmosphering Speed: ${starshipInfo.max_atmosphering_speed} Space KM/Second</p>
       <p>Lenght: ${starshipInfo.length} Space/Meters</p>
       <p>Cargo Capacity: ${starshipInfo.cargo_capacity} Space KG </p>
       <p>Consumables: ${starshipInfo.consumables} Year </p>
       <p>Hyperdrive Rating: ${starshipInfo.hyperdrive_rating} </p>
       <p>Price: ${starshipInfo.cost_in_credits} $Space Dollar</p>
       `) 

   }

   return(
       <>
            <div className="information-container">
            <div className="info-text" dangerouslySetInnerHTML={{__html: starshipBank}}></div>
            </div>
           <div className="subcatagory-container">
            {StarshipsBank.map((starships) => <button className="starships-subcategory submenu-btns" key={starships.name} onClick={() => runHandleClick(starships)}>{starships.name}</button>)}
               
           </div>
       </>

   )
}

export default Starships;