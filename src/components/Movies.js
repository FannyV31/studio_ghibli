import React, {Component} from 'react'
import Movie from './Movie'

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.id.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.description.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.director.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.producer.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.release_date.toLowerCase().includes(term.toLowerCase()) || !term;
    return x.rt_score.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Movies extends Component {
  render(){
    let movies = this.props.movies.filter(searchingFor(this.props.term)).map( (movie) => {
      return (
        <Movie
          key={movie._id}
          movie={movie}
          editingMovieId={this.props.editingMovieId}
          onEditMovie={this.props.onEditMovie}
          onDeleteMovie={this.props.onDeleteMovie}
          onUpdateMovie={this.props.onUpdateMovie}/>
      )
    })
    return(
      <div className="movies">
        {movies}
      </div>
    )  
  }
}

export default Movies