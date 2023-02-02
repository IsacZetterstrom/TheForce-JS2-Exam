import React, {useState, useEffect} from "react";
import '../App.css';


const People = () => {
    
    const [ peopleBank, setPeopleBank ] = useState([]);
    const [ personBank, setpersonBank] = useState([]);

    useEffect(() => {
        fetchPeople();
    },[]);
    
    const fetchPeople = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 9; i++) {
            promises.push(fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
            .then(response => response.json()))
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setPeopleBank([].concat(...results));  
    }

    const runHandleClick = (personInfo) => {
         setpersonBank (`<h3>${personInfo.name}</h3>
        <p>Height: ${personInfo.height} cm</p>
        <p>Weight: ${personInfo.mass} kg</p>
        <p>Hair color: ${personInfo.hair_color}</p> 
        <p>Skin color: ${personInfo.skin_color}</p>
        <p>Eye color: ${personInfo.eye_color}</p>
        <p>Birth year: ${personInfo.birth_year}</p>
        <p>Gender: ${personInfo.gender}</p>`) 

    }

    return(
        <>
    <div className="information-container">
            <div className="info-text" dangerouslySetInnerHTML={{__html: personBank}}></div>
            </div>
            <div className="subcatagory-container">
            {peopleBank.map((person) => <button className="people-subcategory submenu-btns" key={person.name} onClick={() => runHandleClick(person)}>{person.name}</button>)}       
            </div>
        </>
    )
}

export default People;