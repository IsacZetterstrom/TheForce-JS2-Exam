import React from "react";

import '../App.css';



const InfoCard = (cardInfo) => {
    return(
        <div className="information-container">
            <div className="info-text" dangerouslySetInnerHTML={{__html: cardInfo.data }}></div>
        </div>
    )
}

export default InfoCard;