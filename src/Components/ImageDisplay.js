import React, { Component } from 'react';

const ImageDisplay = (props)=>{
  return (
    <div className="imgDisplay">
      <h3>{props.rover}</h3>

      <div className="imgCont">
        {props.pics.map((pic)=>{
          return <img className="marsImg" src={pic.img_src} />
        })}
      </div>

    </div>

  )
}

export default ImageDisplay;
