import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/17003-control-animated-volume-1.json'

class UncontrolledLottie extends Component {

  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
        />
      </div>
    )
  }
}

export default UncontrolledLottie