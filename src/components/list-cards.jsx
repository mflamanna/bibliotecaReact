import React, {useState, useEffect} from "react";
import BookItem from "./BookItem";
import "../styles/liststyles.css";

function ListCards (){
    const [booksApi, setBooksApi] = useState([]);
    useEffect (()=>{
        fetch("https://sheetlabs.com/MELQ/catalog")
        .then (response=>response.json())
        .then (data=>setBooksApi(data))
    })

    return(
        <div className="d-flex justify-content-center">
        <div className="contentBooks ">
        <main className="flex-wrap row row-cols-1 row-cols-md-4">
        {
            booksApi.map((item,index)=>(
                <BookItem key={index} titol={item.titol} autoria={item.autoria}/>
            ))
        }
        </main>
        </div>
        </div>
    );

}

export default ListCards

