import React, {Component} from 'react'

class Movie extends Component {
  render(){
    return(
      <p data-movies-index={this.props.movie.id}>
        <span>{this.props.movie.body}</span>
      </p>
    )
  }
}

export default Movie