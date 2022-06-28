import BookItem from "./BookItem";
import bookfile from "./assets/data.json";

export default function ListCards() {
    const bookList = bookfile.books.map (item => { 
        return (
            <BookItem bookname={item.bookname} author={item.author} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
        )
    })
    return (
        <main className="list-books">
            {bookList}
        </main>
    );
}
