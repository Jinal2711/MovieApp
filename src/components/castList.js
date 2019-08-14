import React, {
  Component
} from 'react';
import '../App.css';

import Swiper from 'react-id-swiper';

export default class CastList extends Component {

  constructor() {
    super()
    this.state = {
      swiper: null
    }
  }

  componentDidMount() {
    let movieId = this.props.castId;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17ce301be4e248433e79e555fb543fb8`)
      .then(res => res.json())
      .then(data => {
        console.log("swiper " + JSON.stringify(data))
        this.setState({
          swiper: data
        })
      })
  }

  render() {
    const params = {
      slidesPerView: 5,
      centeredSlides: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

    }
    let data = this.state.swiper
    if (data == null) return null

    const castName = data.cast.map(cast => {
      return <div className="mb-3">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-header">
            <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}></img>
          </div>
          <div className="card-body" style={{ color: 'black' }}>
            <h5 className="card-title">{cast.name}</h5>
            <p className="card-text">{cast.character}</p>
          </div>
        </div>
      </div>
    })

    return (
      <Swiper {...params}>
        {castName}
      </Swiper>
    );
  }
}