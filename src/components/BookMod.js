import React from 'react'

export default function BookMod({bookname, year, editorial, author, image, genre}) {
  return (
    <form className = "row g-3 w-50 p-3 d-flex justify-content-center">
    <div className = "col-md-6">
        <label for="inputEmail4" class="form-label">Book Name</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder='bookname'/>
    </div>
    <div className = "col-md-6">
        <label for="inputPassword4" className = "form-label">Year</label>
        <input type="text" className = "form-control" id="inputPassword4"/>
    </div>
    <div class="col-12">
        <label for="inputAddress" className = "form-label">Publishing House</label>
        <input type="text" className = "form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div className ="col-12">
        <label for="inputAddress2" class="form-label">Author</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div clasName="col-md-6">
        <label for="inputCity" className="form-label">Image Path</label>
        <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div className="col-md-4">
        <label for="inputState" className = "form-label">Genre</label>
        <select id="inputState" className = "form-select">
            <option selected>Choose...</option>
            <option>...</option>
        </select>
    </div>
    
    <div className="col-12">
        <button type="submit" className="btn btn-primary">Update Book Info</button>
    </div>
</form>
  )
}
