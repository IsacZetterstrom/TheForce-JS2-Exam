// import React, {useState, useEffect} from "react";
    

//     const Search = () => {
//         const [ SearchBank, setSearchBank ] = useState([]);
//         const [ resultBank , setResultBank ] = useState([]);
//         useEffect(() => {
//             fetchApi();
//         },[]);
        
//         const fetchApi = async () =>  {
    
//         let promises = []
//         const fetchFilms = async () =>  {
//             let currentPage = 1;
//             for (let i = 1; i <= 1; i++) {
//                 promises.push(fetch(`https://swapi.dev/api/films/?page=${currentPage}`)
//                 .then(response => response.json())) 
//                 currentPage++;
//             }
//         }
//         const fetchPeoples = async () =>  {
//             let currentPage = 1;
//             for (let i = 1; i <= 9; i++) {
//                 promises.push(fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
//                 .then(response => response.json())) 
//                 currentPage++;
//             }
//         }
//         const fetchPlanets = async () =>  {
//             let currentPage = 1;
//             for (let i = 1; i <= 6; i++) {
//                 promises.push(fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
//                 .then(response => response.json())) 
//                 currentPage++;
//             }
//         }
//         const fetchSpecies = async () =>  {
//             let currentPage = 1;
//             for (let i = 1; i <= 4; i++) {
//                 promises.push(fetch(`https://swapi.dev/api/species/?page=${currentPage}`)
//                 .then(response => response.json())) 
//                 currentPage++;
//             }
//         }
//         const fetchStarship = async () =>  {
//                 let currentPage = 1;
//             for (let i = 1; i <= 4; i++) {
//                 promises.push(fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
//                 .then(response => response.json())) 
//                 currentPage++;
//             }
//         }
//         const fetchVehicles = async () =>  {
//                 let currentPage = 1;
//                     for (let i = 1; i <= 4; i++) {
//             promises.push(fetch(`https://swapi.dev/api/vehicles/?page=${currentPage}`)
//             .then(response => response.json())) 
//             currentPage++;
//             }
//         }
//         fetchFilms();
//         fetchPeoples();
//         fetchPlanets();
//         fetchSpecies();
//         fetchStarship();
//         fetchVehicles();
        
//         let result = await Promise.all(promises);
//         let stepTwoResult = result.map(data => data.results)
//         setSearchBank([].concat(...stepTwoResult));
//     }
//     // console.log(SearchBank);
//     // resultBank.map((item => (item.name)))
//     console.log(SearchBank.name.includes("luke"))
//     return(
//         <div>
//             <form>
//                 <input type="text" placeholder="Search..." className="search-bar" 
//                 onChange={e => setResultBank(e.target.value)}/>
//                 <ul className="search-list">
//                     <li key={SearchBank.url} className="search-items">

//                     </li>
//                 </ul>
//             </form>
//         </div>
//     )
// }
    



    
//     export default Search;