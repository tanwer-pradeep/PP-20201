import React, { Component } from 'react'
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:getMovies(),
            currSearchText:'',
            filterMovies:getMovies()
        }
    }
    onDelete = (id)=>{
        let filterMovies = this.state.movies.filter(movieObj=>{
            return movieObj._id!=id
        })
        this.setState({
            movies:filterMovies
        })
    }
     
    handleChange=(e)=>{
        this.setState({currSearchText:e.target.value})
    }

    render() {
        let {movies} = this.state;
        return (
            <div className='row'>
              <div className='col-3'>
                  <h1>Hello</h1>
              </div>
              <div className='col-9'>
              <input value={this.state.currSearchText} onChange={this.handleChange} type='text'></input>
              <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
   {
       movies.map(movieObj=>(
                <tr scope='row' key={movieObj._id} >
                    <td></td>
                    <td>{movieObj.title}</td>
                    <td>{movieObj.genre.name}</td>
                    <td>{movieObj.numberInStock}</td>
                    <td>{movieObj.dailyRentalRate}</td>
                    <td><button type='button' className='btn btn-danger' onClick={()=>this.onDelete(movieObj._id)}>Delete</button></td>
                </tr>
            ))  
          }
  </tbody>
</table>    
                  
              </div>  
            </div>
              
        )
    }
}


// {
//     