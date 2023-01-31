import React, {useState, useEffect} from "react";
import '../App.css';

const People = () => {
    const [ PeopleBank, setPeopleBank ] = useState([]);
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

    return(
        <div className="subcatagory-container">
        {PeopleBank.map((person) => <button className="people-subcategory submenu-btns">{person.name}</button>)}
        </div>
    )
}

export default People;