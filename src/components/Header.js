import React from 'react';



class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      active: false,
    }

  }

  render(){
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a 
            className={`navbar-item select-none ${this.state.active ? 'is-selected' : ''}`}
            onMouseEnter={() => this.setState({active: true})}
            onMouseLeave={() => this.setState({active: false})}>
              Meme Generator
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
  }
}

export default Header