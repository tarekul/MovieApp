import React from 'react'
import {withRouter} from 'react-router-dom'
import MovieContext from '../contexts/movieContext'

const MovieList = (props) =>{
    const {handleClick} = props
    return <>
        <div class="card-group container mt-5">
        <div class='row'>
        <MovieContext.Consumer>
            {
                movies =>{
                    return movies.map((movie,i)=>{
                        return <div class='col-4' key={i} onClick={e=>handleClick(movie.id)}>
                            <div class="card">
                            <img src={movie.img_url} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{movie.title}</h5>
                            </div>
                        </div>
                        </div>
                    })
                }
            }
        </MovieContext.Consumer>
        </div>
        </div>
    
    </>
}
export default MovieList