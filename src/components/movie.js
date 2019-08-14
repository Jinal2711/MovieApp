import React from 'react';
import Genre from './genres';
import StarRatings from 'react-star-ratings';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data = this.props.Data
    return (
      <div className="col-md-3 mb-3">
        <div className="card mycard" style={{ width: '18rem' }}>
          <div className="card-header">
            <Link to={`/${data.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                className="card-img-top" alt="..." />
            </Link>
          </div>
          <div className="card-body">
            <h6 className="card-title">{data.title}</h6>
            <p>{data.release_date}</p>
            <div className="cardGenre"> {data.genre_ids.map((g, i) => <Genre genreID={g} key={i}></Genre>)}</div>
            <StarRatings
              rating={data.vote_average}
              starRatedColor="green"
              numberOfStars={10}
              starSpacing='2px'
              starDimension="18px"
              name='rating'
            />
          </div>
        </div>
      </div>
    )

  }
}

export default Movie