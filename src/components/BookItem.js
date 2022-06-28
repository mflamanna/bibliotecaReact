

function BookItem ({bookname, year, editorial, author, image, genre}) {
    return (
        <article className="list-book-item">
          <div className="list-book-item-content">
            <img src={image} alt={bookname}/>
            <h3>
              {bookname}    
              <span>{author}</span>
              <span>{genre}</span>
              <span>{year}</span>
              <span>{editorial}</span>
            </h3>
          </div>
        </article>
    );
}

export default BookItem;