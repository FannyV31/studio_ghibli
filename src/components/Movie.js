import React, {Component} from 'react'
import axios from 'axios'
import MovieForm from './MovieForm'

class Movie extends Component {
  static create(movie) {
    let request = axios.post("https://ghibliapi.herokuapp.com/Films/create", movie)
    return request
  }
  constructor() {
    super();
    this.deleteClickedMovie = this.deleteClickedMovie.bind(this);
    this.editClickedMovie = this.editClickedMovie.bind(this);
  }
  deleteClickedMovie() {
    this.props.onDeleteMovie(this.props.movie);
  }
  editClickedMovie() {
    this.props.onEditMovie(this.props.movie)
  }

  render(){
    return(
      <p data-movies-index={this.props.movie.id}>

        <span>{this.props.movie.title}</span>
        <span>{this.props.movie.release_date}</span>
        <span>{this.props.movie.director}</span>
        {/* <span>{this.props.movie.id}</span> */}

        <p>{this.props.movie.description}</p>


        { this.props.editingMovieId === this.props.movie._id ? <MovieForm
        autoFocus={true}
        buttonName="Update Movie!"
        onUpdateMovie={this.props.onUpdateMovie} /> : '' }

        <span
          className='deleteButton'
          onClick={this.deleteClickedMovie}>
            (X)
        </span>

      </p>
    )
  }
}



export default Movie