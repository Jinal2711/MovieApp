import React from 'react';
import Search from './search'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchData: ''
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

        <form class="mx-2 my-auto d-inline w-100">
          <div class="input-group">
            <Search onSearch={(e, query) => this.props.onSearch(e, query)}></Search>
          </div>
        </form>
      </nav>

    )
  }
}
export default Nav;