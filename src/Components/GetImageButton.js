import React, { Component } from 'react';

const GetImageButton = (props)=>{
  return (
    <button onClick={props.fetchImage}>
      Get Images
    </button>
  )
}

export default GetImageButton;
