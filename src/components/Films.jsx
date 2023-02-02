import React, {useState, useEffect} from "react";
import '../App.css';

const Films = () => {
    const [ filmsBank, setFilmsBank ] = useState([]);
    const [ filmBank, setfilmBank] = useState([]);

    useEffect(() => {
        fetchFilms();
    },[]);

    const fetchFilms = async () =>  {
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 1; i++) {
            promises.push(fetch(`https://swapi.dev/api/films/?page=${currentPage}`)
            .then(response => response.json())) 
            currentPage++;
        }
        let result = await Promise.all(promises);
        let stepTwoResult = result.map(data => data.results)
        setFilmsBank([].concat(...stepTwoResult));
    }
    const runHandleClick = (filmInfo) => {
        setfilmBank (`<h3>${filmInfo.title}</h3>
       <p>Episode nr: ${filmInfo.episode_id}</p>
       <p>Director: ${filmInfo.director} kg</p>
       <p>Producer: ${filmInfo.producer}</p>
       <p>Release: ${filmInfo.release_date}</p>`) 
   }

   return(
       <>
            <div className="information-container">
            <div className="info-text" dangerouslySetInnerHTML={{__html: filmBank}}></div>
            </div>
           <div className="subcatagory-container">
               {filmsBank.map((film) => <button className="people-subcategory submenu-btns" key={film.title} onClick={() => runHandleClick(film)}>{film.title}</button>)}
               
           </div>
       </>

   )
}

export default Films;