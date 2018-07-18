import axios from 'axios'

class MovieModel {
  static all(){
    let request = axios.get("https://ghibliapi.herokuapp.com/Films")
    return request
  }
  static create(movie) {
    let request = axios.post("https://ghibliapi.herokuapp.com/Films/create", movie)
    return request
  }
}

export default MovieModel