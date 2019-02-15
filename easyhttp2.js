/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brian Baccarella
 * @license MIT
 *
 **/
class EasyHTTP {
  //GET REQUEST
  get(url){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
}