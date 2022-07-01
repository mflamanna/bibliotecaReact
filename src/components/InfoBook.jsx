import "../assets/data.json"

function InfoBook () {
    return(
        <>
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="https://images-na.ssl-images-amazon.com/images/I/819SKuVK7bL.jpg" class="img-fluid rounded-start" alt="Feminismo para principiantes"></img>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">Feminismo para principiantes</h5>
                <p className="card-text">¿Quienes eran las sufragistas? ¿De dónde sale el feminismo radical? ¿Por que se habla de marxismo y feminismo como de un matrimonio mal avenido? ¿Por que el feminismo ha sido vilipendiado y ridiculizado? ¿Por que las feministas han sido tratadas de "marimachos", feas o mujeres sexualmente insatisfechas? ¿Cómo y dónde surge la expresión "violencia de genero"? ¿En que consiste la masculinidad tradicional? A partir de estos interrogantes, y otros muchos, Nuria Varela repasa tres siglos de hacer y deshacer el mundo, de alumbrar teorías, propuestas y liderazgos fascinantes, y narra la aventura de una agitación social que ningún otro movimiento ha conseguido mantener durante tanto tiempo.</p>
                <p className="card-text"><small className="text-muted">Autora: Nuria Varela</small></p>
                </div>
            </div>
            </div>  
            </div>                            
        </>
    )
}

export default InfoBook;

