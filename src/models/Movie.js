import axios from 'axios'

class MovieModel {
  static all(){
    let request = axios.get("https://ghibliapi.herokuapp.com/Films")
    return request
  }
}

export default MovieModel