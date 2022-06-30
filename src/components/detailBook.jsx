//import '../styles'
import "../assets/data.json";
function InfoBook({ bookName, year, editorial, author, image, genre }) {
    return(
        <>
        <div className="card mb-3">
        <div className="row g-0">
        <div className="col-md-4">
        <img src={image} className="img-fluid rounded-start" alt="" ></img>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">Nombre del libro</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Read more</small></p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default InfoBook;