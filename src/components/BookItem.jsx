import "../styles/cardstyle.css"
import "../assets/data.json"
function BookItem ({ bookName, year, editorial, author, image, genre }) {
    return (
      <>
      <div>
        <div>
        <div class="card h-100 w-30 p-3">
            <img className="card-img-top" src={image}/>
            <ul className="card-body">
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

