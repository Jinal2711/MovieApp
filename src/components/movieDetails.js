import React, {
  Component
} from 'react';
import '../App.css';
import { Router } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
import CastList from './castList';


export default class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null
    }
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieID;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17ce301be4e248433e79e555fb543fb8`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movie: data
        })
      })
  }

  render() {
    let data = this.state.movie
    if (data == null) return null

    return (
      <div className="container-fluid movieBg"
        style={{
          color: 'white',
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,

        }}
      >
        <div className="container-fluid" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <button type="button" class="btn btn-secondary fixed-top" style={{ left: '15px', top: '15px' }}
            onClick={() => this.props.history.go(-1)}>Back</button>
          <div className="row">
            <div className="col-sm-4">
              <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
                style={{
                  boxShadow: '0px 0px 16px #505054',
                  borderRadius: '10px'
                }}></img>
            </div>
            <div className="col-sm-8 text-left">
              <h1>{data.title}</h1>
              <StarRatings
                rating={data.vote_average}
                starRatedColor="#16de23"
                numberOfStars={10}
                starSpacing='5px'
                starDimension="30px"
                name='rating'
              />
              <span style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingBottom: '19px',
                marginTop: '25px'
              }}>
                <button type="button" className="btn btn-primary buttons">
                  <div>Vote Count</div>
                  <span>{data.vote_count}</span>
                </button>
                <button type="button" className="btn btn-success buttons">
                  <div>Popularity</div>
                  <span>{data.popularity}</span>
                </button>
                <button type="button" className="btn btn-danger buttons">
                  <div>Language</div>
                  <span>{data.original_language}</span>
                </button>
                <button type="button" className="btn btn-warning buttons">
                  <div>adult</div>
                  <span>{data.adult == false ? 'No' : 'Yes'}</span>
                </button>
              </span>
              {/* {data.original_title}{data.original_language} */}
              <div className="mt-3 movieDesc">
                <span className="d-flex" style={{ justifyContent: 'space-evenly' }}>
                  <span>Title</span>
                  <span>{data.title}</span>
                </span>

                <span className="d-flex" style={{ justifyContent: 'space-evenly' }}>
                  <span>Original Title</span>
                  <span>{data.original_title}</span>
                </span>

                <span className="d-flex" style={{ justifyContent: 'space-evenly' }}>
                  <span>Language</span>
                  <span>{data.original_language}</span>
                </span>
              </div>



            </div>
          </div>

          <div className="row mt-3">
            <CastList castId={data.id}></CastList>
          </div>
        </div>

      </div >
    );
  }
}