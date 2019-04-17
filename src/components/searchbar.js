import React from 'react'

const Searchbar = (props) =>{
    const {handleChange} = props
    return <div class='container mt-5'>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="search..."  aria-describedby="button-addon2" onChange={e=>handleChange(e)} />  
            </div>
            </div>
}

export default Searchbar
