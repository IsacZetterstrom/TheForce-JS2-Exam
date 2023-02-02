import React, {useState, useEffect} from "react";
import '../App.css';


const People = () => {
    
    const [ peopleBank, setPeopleBank ] = useState([]);
    const [ personBank, setpersonBank] = useState([]);

    useEffect(() => {
        fetchPeople();
    },[]);
    
    //Fetch***** hämtar data från API:t (async, den stannar här tills functionen hämtat all data)
    const fetchPeople = async () =>  {
        let promises = [] //array för att spara all hämtad data (fler pages som hämtas på samma gång)
        let currentPage = 1;
        for (let i = 1; i <= 9; i++) { //i <= 9 är hårdkodad, då people har 9 pages att hämta.
            promises.push(fetch(`https://swapi.dev/api/people/?page=${currentPage}`) //pushar in varje fetch (varje page) i "promises array"
            .then(response => response.json()))
            currentPage++;
        }
        let result = await Promise.all(promises); //lägger in all data i results när promises körts klart.
        let stepTwoResult = result.map(data => data.results) //sorterar ut ett steg i listan så navigering blir lättare
        setPeopleBank([].concat(...stepTwoResult)); //sorterar ut listan ännu ett steg, så alla personer skrivs ut i en och samma array (lättare att behandla)
    }
    // HTML mall för information om respektive karaktär
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
        // omvandlar setpersonBank (html-mallen ovan) till html kod.
        // skapar knappar av varje karaktär, och visar dess namn, för varje knapp 
        // körs map() på peopleBank och informationen från map(person) skickas in i runHandleClick och skrivs ut.
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