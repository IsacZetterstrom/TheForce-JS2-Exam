import React, {useState, useEffect} from "react";
import '../App.css';

const Starships = () => {
    const [ StarshipsBank, setStarshipsBank ] = useState([]);
    useEffect(() => {
        FetchStarships();
    },[]);
    const FetchStarships = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 4; i++) {
            promises.push(fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setStarshipsBank([].concat(...results));
    }
    const HandleClick = (starshipInfo) => {
        console.log(starshipInfo)
    }

    return(
        <div className="subcatagory-container">
        {StarshipsBank.map((starship) => <button className="Starships-subcategory submenu-btns" 
        key={starship.name} onClick={() => HandleClick(starship)}>{starship.name} </button>)}
        </div>
    )
}

export default Starships;