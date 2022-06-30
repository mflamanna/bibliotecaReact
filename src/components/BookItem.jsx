import "../styles/cardstyle.css"
import "../assets/data.json"

function BookItem ({ bookName, year, editorial, author, image, genre }) {
    return (
        <article className="list-book-item">
          <div className="list-book-item-content">
            <img src={image} alt={bookName}/>
            <ul>
              <li>{bookName}</li> 
              <li >{author}</li>
              <li >{genre}</li>
              <li>{year}</li>
              <li>Editorial {editorial}</li>
            </ul>
          </div>
        </article>
    );
}

export default BookItem;

