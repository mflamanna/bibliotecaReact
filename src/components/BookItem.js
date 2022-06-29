import "../styles/cardstyle.css"
import "../assets/data.json"

function BookItem ({ bookName, year, editorial, author, image, genre }) {
    return (
      <div>
        <div>
        <div class="card h-100">
            <img className="card-img-top" src={image}/>
            <ul className="card-body">
              <li className="card-title"><h3>{bookName}</h3></li>  
              <li class="card-textauthor"><h5>Escrito por {author}</h5></li>
              <li class="card-textedit"><h6>Editorial {editorial}</h6></li><li class="card-textyear">Año {year}</li>
              <li class="card-textgenre">{genre}</li>
              
            </ul>
          </div>
          </div>
          </div>
    );
}

export default BookItem;