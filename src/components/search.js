import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchData: ''
    }
  }
  render() {
    return (
      <React.Fragment>
        <input type="text"
          class="form-control"
          autoFocus
          placeholder="Search..."
          onInput={e => this.setState({ searchData: e.target.value })} />
        <span class="input-group-append">
          <button
            class="btn btn-outline-secondary btn-success"
            type="button"
            onClick={e => this.props.onSearch(e, this.state.searchData)}
          >GO</button>
        </span>
      </React.Fragment>
    )
  }
}

export default Search