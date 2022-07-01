import image from "../assets/img/logotransparent.png"
import '../styles/navBar.css'
import {Link} from "react-router-dom"

function NavBar (){
    return (
       <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-text">
            <div className="container-fluid" >
            <img className= "logo" src={image}/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/principal">Home</a>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to ="/newBook">Create</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registration
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Sign-In</a></li>
            <li><a className="dropdown-item" href="#">Log-In</a></li>
            </ul>
            </li>
            </ul>
            </div>
            </div>
            </nav>
      
       </>
    )
}

export default NavBar;