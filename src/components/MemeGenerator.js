import React from 'react';
import MemeFrom from './MemeForm';
import MemeImage from './MemeImage';


class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      memeImage: "",
      isLoading: true,
    }

    this.handleLoad = this.handleLoad.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleLoad() {
    this.setState({ isLoading: false });
  }

  handleSubmit(event) {
    event.preventDefault()
    //get random template_id to use in post
    let get_template_id = 0;
    fetch("https://api.imgflip.com/get_memes", {
      method: "GET",
    }).then(res => res.json())
      .then(data => {
        get_template_id = data.data.memes[12].id;
        console.log("succeeded with GET", get_template_id);

        this.setState({isLoading: true})
        //call api to change memeImage
        fetch("https://api.imgflip.com/caption_image", {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            template_id: get_template_id,
            username: "pingu9",
            password: 'E2N%CkHO',
            text0: this.state.topText,
            text1: this.state.bottomText,
          })
        }).then(res => res.json())
          .then(data => {                                    
            this.setState({memeImage: data.data.url})                      
            this.setState({isLoading: false})
          }).catch(err => { console.log(err) })

      }).catch(err => { console.log(err) })


  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <MemeFrom handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state}></MemeFrom>      
        <MemeImage url={this.state.memeImage} handleLoad={this.handleLoad} isLoading={this.state.isLoading} ></MemeImage>
      </div>
    );
  }

}

export default MemeGenerator