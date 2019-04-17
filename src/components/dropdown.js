import React from 'react'

const DropDown = (props) =>{
    const {handleChange} = props
    return <><div class='container mt-5'><select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={e=>handleChange(e)}>
    <option selected value='0'>All Movies</option>
    <option value="1">Action</option>
    <option value="3">Thriller</option>
    <option value="4">Comedy</option>
    <option value="6">Adventure</option>
    <option value="10">Animation</option>
  </select></div></>
}

export default DropDown