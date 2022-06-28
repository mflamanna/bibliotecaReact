import welcoImage from "../assets/img/Home-book.png";

export default function Welcome(){
    return(
    <>
        <h2>Welcome to Feminist Library</h2>
        <button type="button" class="btn btn-secondary">Press here to start</button>
        <img src = {welcoImage} alt = "Imagen libro"/>
    </>
    )
}