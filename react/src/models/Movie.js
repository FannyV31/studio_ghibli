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
  static delete(movie){
    let request = axios.delete(`https://ghibliapi.herokuapp.com/Films/delete/${movie.id}`)
    return request
  }
  static update(movieId, movieBody) {
    let request = axios.put(`https://ghibliapi.herokuapp.com/Films/update/${movieId}`, {body: movieBody})
    return request
  }
}

export default MovieModel