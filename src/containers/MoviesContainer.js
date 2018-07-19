import React, {Component} from 'react'
import MovieModel from '../models/Movie'
import Movies from '../components/Movies'
import CreateMovieForm from '../components/CreateMovieForm'


class MoviesContainer extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      editingMovieId: null,
      editing: false
    }
    this.createMovie = this.createMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    MovieModel.all().then( (res) => {
      this.setState ({
        movies: res.data,
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

  deleteMovie(movie) {
    MovieModel.delete(movie).then((res) => {
        let movies = this.state.movies.filter(function(movie) {
          return movie.id !== res.data.id
        });
        this.setState({movies})
    })
  }
  updateMovie(movieBody) {
    var movieId = this.state.editingMovieId
    function isUpdatedMovie(movie) {
        return movie.id === movieId;
    }
    MovieModel.update(movieId, movieBody).then((res) => {
        let movies = this.state.movies
        movies.find(isUpdatedMovie).body = movieBody
        this.setState({movies: movies, editingMovieId: null, editing: false})
    })
}
editMovie(movie){
  this.setState({
    editingMovieId: movie.id,
    editing: true
  })
}
  render(){
      return (
        <div className='moviesComponent'>

          <h2>This is a movies container</h2>

          <Movies
            movies={this.state.movies}
            editingMovieId={this.state.editingMovieId}
            onEditMovie={this.editMovie}
            onDeleteMovie={this.deleteMovie} 
            onUpdateMovie={this.updateMovie}
            term={this.props.term} />

          <CreateMovieForm
            createMovie={ this.createMovie }/>

          </div>
      )
  }
}
  
export default MoviesContainer
  
