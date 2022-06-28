import React from "react";
import '../styles/welcome.css'
import welcoImage from "../assets/img/welcome-image.jpg";

function Welcome(){
    return(
    <>
    <div className = "welcome-container">
        <div className = "welcome-sec-left">
            <h2 className = "welcome-h2" >Welcome to Feminist Library</h2>
            <button type = "button" className="btn btn-secondary">Press here to start</button>   
        </div>
        <div className = "welcome-sec-right">
            <img className="welcome-img" src = {welcoImage} alt = "Imagen libro"/>  
        </div>   
    </div>
    </>
    )
}

export default Welcome;