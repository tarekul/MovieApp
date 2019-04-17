import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = (props) =>{
    return <><ul class="nav" style={{marginTop:'3%'}}>
    <li class="nav-item" style={{marginLeft:'10%'}}>
      <Link to='/'>Home</Link>
    </li>
    <li class="nav-item" style={{marginLeft:'2%'}}>
    <Link to='/movies'>All Movies</Link>
    </li>
    <li class="nav-item" style={{marginLeft:'2%'}}>
        <Link to='/movies/byGenre'>Genres</Link>
    </li>
    </ul></>
} 

export default Navbar



