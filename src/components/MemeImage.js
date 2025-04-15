import React from "react";

class MemeImage extends React.Component {

  render() {
    return (
      <div>
        {this.props.isLoading && <h1>Loading</h1>}
        <img
          src={this.props.url}
          onLoad={this.props.handleLoad}
          style={{ display: this.props.isLoading ? 'none' : 'block' }}
          alt="meme"
          >          
        </img>
      </div>
    )
  }
}


export default MemeImage