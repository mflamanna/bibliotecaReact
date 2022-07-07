import "../styles/cardstyle.css"
import { Link } from "react-router-dom";
import iconoEditar from "../assets/img/editar.png";
import iconoEliminar from "../assets/img/eliminar.png"



function BookItem ({ titol, isbn, autoria, descriptors }) {
  let imagen = "https://covers.openlibrary.org/b/isbn/"+isbn+"-M.jpg"
    return (
      <>
        <div>
        <div className="cardBookItem card h-100 mt-3">
          <Link to = "/detailBook">
            <img className="cardImgBook card-img-top" src={imagen} alt ="imagen de libro"/>
          </Link>
            <ul className="cardBodyBook card-body">
              <li className="card-title"><h5>{titol}</h5></li>
              <li className="card-textauthor"><p>By {autoria}</p></li>
              <li className="card-textisbn">ISBN {isbn}</li>
              <li className="card-textgenre">{descriptors}</li>
            </ul>
            <div className="contenedorIconos">
            <Link to="/modifiedBook">
              <img src={iconoEditar} className="icono" alt="imagen icono editar"/>
            </Link>
            <img src={iconoEliminar} className="icono" alt="imagen icono eliminar"/>
            </div>
          
          </div>
          </div>
        
          </>
    );
}
export default BookItem;

