import React, {useState, useEffect} from "react";
import '../App.css';

const Films = () => {
    const [ FilmsBank, setFilmsBank ] = useState([]);
    useEffect(() => {
        FetchFilms();
    },[]);
    const FetchFilms = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 1; i++) {
            promises.push(fetch(`https://swapi.dev/api/films/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setFilmsBank([].concat(...results));
    }

    return(
        <div className="subcatagory-container">
        {FilmsBank.map((film) => <button className="Films-subcategory submenu-btns" key={film.title}>{film.title}</button>)}
        </div>
    )
}

export default Films;