import React from 'react'
class Genre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/genre/${this.props.genreID}?api_key=17ce301be4e248433e79e555fb543fb8`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.name
        })
      })
  }
  render() {
    return (

      <span className="badge badge-pill badge-success">
        {this.state.name}
      </span>

    )
  }
}

export default Genre