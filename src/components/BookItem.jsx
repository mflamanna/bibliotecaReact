

function BookItem ({bookname, year, editorial, author, image, genre}) {
    return (
        <article className="list-book-item">
          <div className="list-book-item-content">
            <img src={image} alt={bookname}/>
            <ul>
              <li>{bookname}</li> 
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

