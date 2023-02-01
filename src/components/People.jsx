import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Link } from 'react-router-dom';
import  InfoCard  from './InfoCard';
import '../App.css';
let cardInfo = "";

const People = (props) => {
    
    const navigate = useNavigate();
    const [ PeopleBank, setPeopleBank ] = useState([]);
    const [ open, setOpen] = React.useState(false);
    useEffect(() => {
        FetchPeople();
    },[]);
    const FetchPeople = async () =>  {
        
        let promises = []
        let currentPage = 1;
        for (let i = 1; i <= 9; i++) {
            promises.push(fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
            .then(response => response.json())) //kolla mer på promise / promise all
            currentPage++;
        }
        let result = await Promise.all(promises);
        let results = result.map(data => data.results)
        setPeopleBank([].concat(...results));  
    }

    const HandleClick = (personInfo) => {
        
        cardInfo = `<h3>${personInfo.name}</h3>
        <p>Height:${personInfo.height} cm</p>
        <p>Weight:${personInfo.mass} kg</p>
        <p>Hair color:${personInfo.hair_color}</p>
        <p>Skin color:${personInfo.skin_color}</p>
        <p>Eye color: ${personInfo.eye_color}</p>
        <p>Birth year: ${personInfo.birth_year}</p>
        <p>Gender: ${personInfo.gender}</p>`;

    }

    return(
        <>
        {/* {cardInfo && <InfoCard data={cardInfo}/>} */}
    
            <div className="subcatagory-container">
                {/* <Link to={{pathname:"/InfoCard", state: cardInfo}}>{PeopleBank.map((person) => <button className="people-subcategory submenu-btns" key={person.name} onClick={() =>  HandleClick(person)}>{person.name}</button>)}</Link> */}
                {/* <Link to={'/InfoCard'}>{PeopleBank.map((person) => <button className="people-subcategory submenu-btns" key={person.name} onClick={() =>  HandleClick(person)}>{person.name}</button>)}</Link> */}
                {/* <button className="people-subcategory submenu-btns" key={person.name} onClick={() =>  HandleClick(person)}>{person.name}</button>)} */}
                {PeopleBank.map((person) => 
                <button className="people-subcategory submenu-btns" key={person.name} onClick={() => HandleClick(person)}>{person.name}</button>)}
                {/* <div dangerouslySetInnerHTML={{__html: cardInfo}}></div> */}
            </div>
        </>

    )
}

export default People;