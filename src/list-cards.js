import BookItem from "./BookItem";
import '../Index';

function ListCards() {
    const bookList = books.map (item => { 
        return (
            <BookItem bookname={item.bookname} author={item.author} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
        )
}
        )
    return (
        <main className="list-books">
            {bookList}
        </main>
    );
}

export default ListCards;