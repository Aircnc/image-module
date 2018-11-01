import React from 'react';
import { Button } from 'semantic-ui-react';
import $ from 'jquery';
import axios from 'axios';
import sampleUrls from './../data/image.js';
const listingId = '46567b4d-9778-4403-89df-4ee08bc0f8cb';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`

  *, *::before, *::after{
    box-sizing: border-box;
    transition: all 0.3s linear;
  }

  .grid-container {
    z-index: 0;
    width: 100%;
    height:63%;
    display: grid;
    grid-template-areas:
    'menu menu main right'
    'menu menu footer1 footer2';
    background-color: #484848;
  }

  .item2 { 
    grid-area: main;
    min-width:421px;
    width:  100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }
  .item3 { 
    grid-area: menu;
    min-width:839px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }
  .item4 { 
    grid-area: right; 
    min-width:421px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }
  .item5 { 
    grid-area: footer1;
    min-width:421px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }

  .item6 { 
    grid-area: footer2; 
    min-width:421px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }

  
  .bigImage {
    width: 100%;
    height:100%;
    border: solid rgb(95,95,95);
    border-width: 1px;
    opacity: ${p => p.opacity.bigImage};
  }
  
  .smallImage1, .smallImage2, .smallImage3, .smallImage4 {
    width: 100%;
    height:100%;
    border: solid rgb(95,95,95);
    border-width: 1px;
  }

  .smallImage1 {
    opacity: ${p => p.opacity.smallImage1};
  }

   .smallImage2 {
    opacity: ${p => p.opacity.smallImage2};
  }
  
  .smallImage3 {
    opacity: ${p => p.opacity.smallImage3};
 
  }

  .smallImage4 {
    opacity: ${p => p.opacity.smallImage4};
  }
  
  img:hover {
    cursor: pointer;
  }
  
  .bigImage:hover, .smallImage1:hover, .smallImage2:hover, .smallImage3:hover, .smallImage4:hover {
    transform: scale(1.05);
  }
`;

//TODO:
// use a state that gets toggled on hover. Check to see if sty;ed component can trigger state

class ImageCollage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: sampleUrls,
      opacity: {
        smallImage1: 1,
        smallImage2: 1,
        smallImage3: 1,
        smallImage4: 1,
        bigImage: 1,
      },
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    axios.get(`/listings/${listingId}/images`)
      .then(({ data }) => {
        const newImages = data[0].images;
        console.log(newImages);
        this.setState({ images: newImages });
      });
  }

  handleMouseLeave(e) {
    const { className } = e.target;
    const { opacity } = this.state;

    console.log('handleMouseLeave:', className);

    Object.keys(opacity).forEach((imageClass) => {
      opacity[imageClass] = 1;
    });

    this.setState({
      opacity,
    });
  }

  handleHover(e) {
    const { className } = e.target;
    const { opacity } = this.state;
    console.log('handleHover:', className);

    Object.keys(opacity).forEach((imageClass) => {
      console.log('imageClass in handleHover:', imageClass);
      if (className === imageClass) {
        opacity[imageClass] = 1;
      } else {
        opacity[imageClass] = 0.4;
      }
    });

    this.setState(
      {
        opacity,
      },
    );
  }


  // <Button className="item6 Button"> View Photos</Button>
  // <Button className="item4 Button2"> Share</Button>
  // <Button className="item4 Button3"> Save</Button>

  render() {
    const { images, opacity } = this.state;

    return (
      <Wrapper opacity={opacity}>
        <div className="grid-container">
          <div className="item2">
            <img
              alt= "image"
              onMouseEnter={this.handleHover} 
              onMouseLeave={this.handleHover} 
              onClick = {() => this.props.handleClick('gallery', 0)} 
              className = 'bigImage' 
              src={images[0].imageUrl} 
            />
          </div>
          <div className="item3"><img alt="" onMouseEnter={(e) => this.handleHover(e)} onMouseLeave={(e) => this.handleMouseLeave(e)} onClick = {() => this.props.handleClick('gallery', 1)} className = 'smallImage1' src={images[1].imageUrl} /></div>
          <div className="item4"><img alt="" onMouseEnter={(e) => this.handleHover(e)} onMouseLeave={(e) => this.handleMouseLeave(e)} onClick = {() => this.props.handleClick('gallery', 2)} className = 'smallImage2' src={images[2].imageUrl} /></div>
          <div className="item5"><img alt="" onMouseEnter={(e) => this.handleHover(e)} onMouseLeave={(e) => this.handleMouseLeave(e)} onClick = {() => this.props.handleClick('gallery', 3)} className = 'smallImage3' src={images[3].imageUrl} /></div>
          <div className="item6"><img alt="" onMouseEnter={(e) => this.handleHover(e)} onMouseLeave={(e) => this.handleMouseLeave(e)} onClick = {() => this.props.handleClick('gallery', 4)} className = 'smallImage4' src={images[4].imageUrl} /></div>
        </div>
      </Wrapper>
    );
  }
}
export default ImageCollage;
