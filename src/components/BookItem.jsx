import "../styles/cardstyle.css"
import { Link } from "react-router-dom";
import iconoEditar from "../assets/img/editar.png";
import iconoEliminar from "../assets/img/eliminar.png"



function BookItem ({ titol, ISBN, autoria, image, descriptors }) {
    return (
      <>
        <div>
        <div className="cardBookItem card h-100 mt-3">
          <Link to = "/detailBook">
            <img className="cardImgBook card-img-top" src={image} alt ="imagen de libro"/>
          </Link>
            <ul className="cardBodyBook card-body">
              <li className="card-title"><h5>{titol}</h5></li>
              <li className="card-textauthor"><p>By {autoria}</p></li>
              <li className="card-textisbn">{ISBN}</li>
              <li className="card-textgenre">{descriptors}</li>
            </ul>
            <div className="contenedorIconos">
            <Link to="/modifiedBook">
              <img src={iconoEditar} className="icono"/>
            </Link>
            <img src={iconoEliminar} className="icono"/>
            </div>
          
          </div>
          </div>
        
          </>
    );
}
export default BookItem;

