import BookItem from "./BookItem";
import bookfile from "../assets/data.json";
import "../styles/liststyles.css";


export default function ListCards() {
    const bookList = bookfile.books.map (item => { 
        return (
            <BookItem bookName={item.bookName} author={item.author} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>
        )
    })
    return (
        <div className="contentBooks">
        <main className="row row-cols-1 row-cols-md-4">
            {bookList}
        </main>
        </div>
    );
}


