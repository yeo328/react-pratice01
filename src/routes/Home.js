import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie.js';
import '../css/Home.css'

import Project from './Project.js';

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : [],
  };
  getMovies = async () => {
    const {
      data : {
        data : {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
    this.setState({movies, isLoading : false})
  }
  componentDidMount(){
    // 데이터 로딩!
    // setTimeout(()=>{this.setState({isLoading: false});}, 6000);
    // axios.get('https://yts.mx/api/v2/list_movies.json')
    this.getMovies()
  }
  render(){
    const {isLoading, movies} = this.state;
    return(
      <div>
          <Project/>
       <section className="container"> 

        {isLoading ? (
          <div className="loader">
            <h1 className="loader__text">Loading.....<br/>api를 활용한 영화 데이터 가져오는중 ... 😁 </h1>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie=>(
          <Movie
          key = {movie.id}
          id = {movie.id}
          year = {movie.year} 
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}
          />
        ))}
          </div>
      )}   
    </section>
      </div>
     );
  }
  }




export default Home;
