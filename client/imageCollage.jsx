import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sampleUrls from '../data/image';

const listingId = '46567b4d-9778-4403-89df-4ee08bc0f8cb';

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

  .bigPicture { 
    grid-area: main;
    min-width:421px;
    width:  100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }
  .item1 { 
    grid-area: menu;
    min-width:839px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }
  .item2 { 
    grid-area: right; 
    min-width:421px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }
  .item3 { 
    grid-area: footer1;
    min-width:421px;
    width: 100%;
    height:100%;
    overflow:hidden;
    display: inline-block;
  }

  .item4 { 
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

  .Button {
    z-index: 10;
    position:absolute;
    width: 125px;
    height: 39px;
    top:55%;
    left: 91%;
  }
  
  .Button2 {
    position:absolute;
    z-index: 10;
    top: 5%;
    left:92%;
    bottom: 88px;
    right:150px;
    width:94px;
  }
  .Button3 {
    position:absolute;
    z-index: 10;
    width:94px;
    top: 5%;
    left:78%;
    bottom: 88px;
    right:180px;
  }
`;

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
    this.createCollage = this.createCollage.bind(this);
  }

  componentDidMount() {
    axios.get(`/listings/${listingId}/images`)
      .then(({ data }) => {
        const newImages = data[0].images;
        this.setState(
          {
            images: newImages,
          },
        );
      });
  }

  handleHover({ className }) {
    const { opacity } = this.state;

    Object.keys(opacity).forEach((imageClass) => {
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

  handleMouseLeave() {
    const { opacity } = this.state;

    Object.keys(opacity).forEach((imageClass) => {
      opacity[imageClass] = 1;
    });

    this.setState(
      {
        opacity,
      },
    );
  }

  createCollage() {
    const imageList = [];
    const { images } = this.state;
    const { handleClick } = this.props;

    /* eslint-disable */
    for (let i = 1; i < 5; i += 1) {
      const DOM = (
        <div className={`item${i}`}>
          <img
            alt=""
            key={i}
            onMouseEnter={e => this.handleHover(e.target)}
            onMouseLeave={e => this.handleMouseLeave(e)}
            onClick={({ target }) => handleClick('gallery', target, i)}
            className={`smallImage${i}`}
            src={images[i].imageUrl}
          />
        </div>
      );
      imageList.push(DOM);
    }
    /* eslint-disable */

    return imageList;
  }

  render() {
    const { images, opacity } = this.state;
    return (
      <div>
        <Wrapper opacity={opacity}>
          <Button className="Button3"> Share</Button>
          <Button className="Button2"> Save</Button>
          <Button className="Button"> View Photos</Button>

          { /* eslint-disable */ }
          <div className="grid-container">
            <div className="bigPicture">
              <img
                alt= ""
                onMouseEnter={(e) => this.handleHover(e.target)} 
                onMouseLeave={(e) => this.handleMouseLeave(e)} 
                onClick = {({target}) => this.props.handleClick('gallery', target, 0)} 
                className = 'bigImage' 
                src={images[0].imageUrl} 
              />
            </div>
            {this.createCollage()}
          { /* eslint-enable */ }
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default ImageCollage;

ImageCollage.propTypes = {
  handleClick: PropTypes.func,
};

ImageCollage.defaultProps = {
  handleClick: () => {
  },
};
