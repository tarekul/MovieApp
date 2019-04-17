import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios';

class Profile extends Component{
    state = {
        movie:null
    }

    componentDidMount(){
        const {id} = this.props.match.params
        axios({
            method:'GET',
            url:`http://localhost:7000/movies/${id}`
        })
        .then(response=>{
            console.log(response.data)
            this.setState({movie:response.data},()=>console.log('new state',this.state.movie))
        })
    }
    
    showComments = () =>{
        const {movie} = this.state
        if(movie){
            const {comments} = movie
            if(comments.length === 0) return ''
            else{
                return <div class='container mt-5'><h3>Comments</h3>{comments.map(com=>{
                    return <p>{com.text}</p>
                })} </div>
        }
        }
        
    }

    showMovie = () =>{
        const {movie} = this.state
        if(movie) return <>
        <div class='container mt-5'>
        <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={movie.img_url} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{movie.title}</h5>
                <p class="card-text">{Math.round(movie.avg_rating)}</p>
            </div>
            </div>
        </div>
        </>
    }

    render(){
        return <>
        {this.showMovie()}
        {this.showComments()}
        </>
    }
}

export default withRouter(Profile)