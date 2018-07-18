import React, {Component} from 'react'

class CreateMovieForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      movie: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      movie: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let movie = this.state.movie
    this.props.createMovie(movie)
    this.setState({
      movie: ""
    })
  }
  render(){
    return (
      <div className='createForm movieForm'>
        <h2>Create Movie Here!</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input
            onChange={ this.onInputChange }
            placeholder='Write a movie here ...'
            type='text'
            value={this.state.movie} />
          <button type='submit'>Create Movie!</button>
        </form>
      </div>
    )
  }
}

export default CreateMovieForm