import "../styles/cardstyle.css"
import { Link } from "react-router-dom";
import DetailBook from "../pages/detailBook";


function BookItem ({ bookName, year, editorial, author, image, genre }) {
    return (
      <>
      <div>
        <div>
        <div className="cardBookItem card h-100 mt-3">
          <Link to = "/detailBook">
            <img className="cardImgBook card-img-top" src={image}/>
          </Link>
            <ul className="cardBodyBook card-body">
              <li className="card-title"><h5>{bookName}</h5></li>
              <li className="card-textauthor"><p>By {author}</p></li>
              <li className="card-textedit"><p>Edithorial {editorial}</p></li>
              <li className="card-textyear">{year}</li>
              <li className="card-textgenre">{genre}</li>
            </ul>
          </div>
          </div>
          </div>
          </>
    );
}
export default BookItem;

