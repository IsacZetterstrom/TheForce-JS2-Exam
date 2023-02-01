import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useOutletContext} from 'react-router-dom';
import { People } from './People';

import '../App.css';



const InfoCard = (cardInfo) => {
    const [state, setState] = useState({
        data: ""
      });

console.log(cardInfo)
    return(
        <div className="cardInfo-container">
            <div dangerouslySetInnerHTML={{__html: cardInfo.data }}></div>
            <button className="back-btn">go back ffs</button>
        </div>
    )
}

export default InfoCard;