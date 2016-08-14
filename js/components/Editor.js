import Button from './Button'
import Canvas from './Canvas'
import ImageUploader from './ImageUploader'
import Controls from './Controls'

import React from 'react'

const Editor = React.createClass({
  getInitialState() {
    return {
      nippleRadius: 15,
      nippleStyle: 'black',
      nippleNum: 2,
      image: null,
      imageSet: false,
    }
  },
  // Takes an Image `image` and updates the state
  imageHandler(image) {
    this.setState({
      image: image,
      imageSet: true
    })
  },
  // Creates a download link to the canvas as a data URL and clicks it
  downloadCanvas() {
    const src = document.getElementById('nippler-canvas').toDataURL()
    let a = document.createElement('a')
    a.href = src
    a.download = "nippler.jpg"
    a.click()
  },
  updateNippleEmoji (char) {
    this.setState({ nippleStyle: char })
  },
  updateNippleRadius (e) {
    this.setState({ nippleRadius: e.target.value })
  },
  render() {
    return (
      <div>
        <div className='canvas-container'>
          <Canvas
            nippleRadius={this.state.nippleRadius}
            nippleStyle={this.state.nippleStyle}
            image={this.state.image} />
        </div>
        <Controls
          handleEmoji={this.updateNippleEmoji}
          updateNippleRadius={this.updateNippleRadius} />
        <Button handler={this.downloadCanvas} disabled={!this.state.imageSet}>
          Download photo
        </Button>
        <ImageUploader imageHandler={this.imageHandler} />
      </div>
    )
  }
})

export default Editor
