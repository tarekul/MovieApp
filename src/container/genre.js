import React, {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import DropDown from '../components/dropdown'
import axios from 'axios';
import MovieContext from '../contexts/movieContext'
import MovieList from '../components/showmovies'

class Genre extends Component{
    

    state = {
        movies:['1'],
        filterMovies:[],
        showFilter:false,
        redir:false,
        id:''
    }

    

    componentDidMount(){
        axios({
            method:'GET',
            url:`http://localhost:7000/movies`
        })
        .then(response=>{
            //console.log(response.data)
            this.setState({movies:response.data})
        })
    }

    // componentDidUpdate(){
    //     if(this.state.id !== '')
    //     this.props.history.push(`/movies/${this.state.id}`)
    // }
    
    handleChange = (e) =>{
        const genre_id = e.target.value
        //console.log(typeof genre_id)
        if(genre_id === '0'){
            this.setState({filterMovies:[],showFilter:false},()=>{
                console.log(this.state)
            })
        }
        else{
            axios({
                method:'GET',
                url:`http://localhost:7000/movies/${genre_id}/genre`
            })
            .then(response=>{
                this.setState({filterMovies:response.data,showFilter:true})
            })
        }
        
    }



    handleClick = i =>{
        this.props.history.push(`/movies/${i}`)
    }

    render(){
        const {showFilter,movies,filterMovies} = this.state
        const value = showFilter === true ? filterMovies : movies
        return <>
            <DropDown handleChange={this.handleChange}/>
            <MovieContext.Provider value={value}>
                <MovieList handleClick={this.handleClick}/>
            </MovieContext.Provider>
        </>
      
        
    }
}

export default withRouter(Genre)