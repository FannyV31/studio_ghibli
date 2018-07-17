import React, {Component} from 'react'
import Movie from './Movie'

class Movies extends Component {
  render(){
    let movies = this.props.movies.map( (movie) => {
      return (
        <Movie
          key={movie._id}
          movie={movie}/>
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