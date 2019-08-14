import React, { Component } from 'react';
import Movie from './movie';
import Nav from './nav';

class MovieList extends Component {
  constructor() {
    super()
    this.state = {
      movieData: []
    }
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=17ce301be4e248433e79e555fb543fb8')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieData: data.results
        })
      })
  }

  searchResult(query) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=17ce301be4e248433e79e555fb543fb8&query=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieData: data.results
        })
      })
  }

  render() {
    const movieData = this.state.movieData.map((m, i) => {
      return <Movie
        Data={m}>
      </Movie>
    })
    return (
      <div className="p-3">
        <Nav onSearch={(e, query) => this.searchResult(query)}></Nav>
        <div className="row" style={{ marginTop: '70px' }}>
          {movieData}
        </div>
      </div>
    );
  }
}
export default MovieList;