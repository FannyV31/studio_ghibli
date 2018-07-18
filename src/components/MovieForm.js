import React, {Component} from 'react'

class MovieForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({
      movie: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    var movie = this.state.movie
    this.props.onUpdateMovie(movie)
    this.setState({
      movie: ""
    })
  }
  render(){
    return (
      <div className='movieForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a movie here ...'
            type='text'
            value={(this.state && this.state.movie) || ''} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default MovieForm