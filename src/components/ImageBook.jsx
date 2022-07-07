import React, {useState, useEffect} from "react";

function ImageBook ({isbn}){
    const [imgBook, setImgBook] = useState([]);
    useEffect (()=>{
        fetch(`https://openlibrary.org/isbn/${isbn}.json`)
        .then (response=>response.json())
        .then (data=>setImgBook(data))
    }, [])
    
    return(
        <img className="cardImgBook card-img-top" src={"https://openlibrary.org/isbn/"+isbn+".json"} alt ="imagen de libro"/> 
    )
}

export default ImageBook;