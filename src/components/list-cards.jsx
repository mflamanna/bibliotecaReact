import BookItem from "./BookItem";
import bookfile from "../assets/data.json";
import "../styles/liststyles.css";


export default function ListCards() {
   return (
        <div className="d-flex justify-content-center">
        <div className="contentBooks ">
        <main className="flex-wrap row row-cols-1 row-cols-md-4">
        {bookfile.books.map (item => <BookItem bookName={item.bookName} key={item.id} author={item.author} genre={item.genre} year={item.year} editorial={item.editorial} image={item.image}/>)}
        </main>
        </div>
        </div>
    );
}


