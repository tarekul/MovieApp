import React, {Component} from 'react';
import axios from 'axios';

import MovieContext from '../contexts/movieContext'
import MovieList from '../components/showmovies'
import Searchbar from '../components/searchbar'

class Movies extends Component{
    state = {
        movies:[],
        search:'',
        searcharr:[],
        showSearch:false
    }

    getMovies(){
        return axios({
            method:'GET',
            url:'http://localhost:7000/movies/',
        })
        
    }

    componentDidMount(){
        this.getMovies()
        .then(response=>{
            //console.log(response.data)
            this.setState({movies:response.data},()=>{
                console.log(this.state.movies)
            })
        })
        
    }

    handleChange = (e) =>{
        if(e.target.value === '') this.setState({showSearch:false})
        const arr = []
        this.state.movies.forEach(movie=>{
            if(movie.title.toLowerCase().includes(e.target.value.toLowerCase())){
                arr.push(movie)
            }
        })
        this.setState({searcharr:arr,showSearch:true})
    }

    handleClick = i =>{
        this.props.history.push(`/movies/${i}`)
    }

    render(){
        const {showSearch,movies,searcharr} = this.state
        const value = showSearch === true ? searcharr : movies
        return<>
            <Searchbar handleChange={this.handleChange}/>
            <MovieContext.Provider value={value}>
                <MovieList handleClick={this.handleClick}/>
            </MovieContext.Provider>
        </>
    }
    
}

export default Movies