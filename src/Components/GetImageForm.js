import React, { Component } from 'react';
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
import axios from "axios";
import '../Styles/App.css';

export default class GetImageForm extends Component {


  constructor(){
    super();
    this.state = {
      camera: "fhaz",
      rover: "Curiosity",
      sol: "",
      images: []
    }

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
  }


//FUNCTIONs N STUFf

  handleRover(evt){
    let evtVal = evt.target.value
    this.setState({
      rover: evtVal
    })
  }

  handleCamera(evt){
    let evtVal = evt.target.value
    this.setState({
      camera: evtVal
    })
  }

  handleSol(evt){
    let evtVal = evt.target.value
    this.setState({
      sol: evtVal
    })
  }

  fetchImage(){
    const rove = this.state.rover;
    const sol = this.state.sol;
    const cam = this.state.camera;
    const API_KEY = "HpymAkKuAw5jzmcq0tcvR8lEK7TPAzBLqNOoJqQ4";
    const imgURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${sol}&camera=${cam}&api_key=${API_KEY}`;

    axios.get(imgURL).then((response)=>{
      this.setState({
        images: response.data.photos
      })
    })
  }





  componentDidUpdate(){
    console.log(this.state);
  }


  render() {
    return (
      <div className="main">
        <form className="imageForm">
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>

        <GetImageButton fetchImage={this.fetchImage} />
        <ImageDisplay pics={this.state.images} rover={this.state.rover}/>
      </div>
    );
  }
}
