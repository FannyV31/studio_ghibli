import React, {Component} from 'react'
import MovieModel from '../models/Movie'
import Movies from '../components/Movies'

class MoviesContainer extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
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
  render(){
    return(
    <div>
    {MovieModel.all().then( (res) => {
      console.log(res)
      return (
        <div className="MoviesComponent">
          <Movies movies={this.state.movies} />
        </div>
      )}
    )}
    </div>
    )
  }
}
  
export default MoviesContainer
  
