import React, {Component} from 'react'
import MovieModel from '../models/Movie'
import Movies from '../components/Movies'
import CreateMovieForm from '../components/CreateMovieForm'

class MoviesContainer extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
    this.createMovie = this.createMovie.bind(this);
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    MovieModel.all().then( (res) => {
      this.setState ({
        movies: res.data.movies,
        movie: ''
      })
    })
  }
  
  createMovie(movie) {
    let newMovie = {
      body: movie,
      completed: false
    }
    MovieModel.create(newMovie).then((res) => {
      let movies = this.state.movies
      let newMovies = movies.push(res.data)
      this.setState({newMovies})
    })
  }
  render(){
    return(
    <div>
    {MovieModel.all().then( (res) => {
      console.log(res)
      return (
        <div className='moviesContainer'>
          <h2>This is a movies container</h2>
          <Movies
            movies={this.state.movies} />
          <CreateMovieForm
            createMovie={ this.createMovie }
        />
        </div>
        // </div>
      )}
    )}
    </div>
    )
  }
}
  
export default MoviesContainer
  
