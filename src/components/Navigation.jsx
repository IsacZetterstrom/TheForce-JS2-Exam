import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Navigation () {

    return(
        <div className="container-main">
        <ul className="main-nav">
            <Link to="/"><button className="menu-btns">Home</button></Link>
            <Link to="/People"><button className="menu-btns">People</button></Link>
            <Link to="/Planets"><button className="menu-btns">Planets</button></Link>
            <Link to="/Species"><button className="menu-btns">Species</button></Link>
            <Link to="/Vehicles"><button className="menu-btns">Vehicles</button></Link>
            <Link to="/Starships"><button className="menu-btns">Starships</button></Link>
            <Link to="/Films"><button className="menu-btns">Films</button></Link>
        </ul>
        </div>

    )
}
export default Navigation;