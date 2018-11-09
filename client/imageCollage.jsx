import React from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sampleUrls from '../data/image';



const Wrapper = styled.div`

  *, *::before, *::after{
    transition: all 0.3s linear;
  }

  .grid-containerImage {
    overflow: hidden;
    display: flex;
    width: 100%;
    height:20%%;
    background-color: #484848;
  }
  
  .bigPictureContainer { 
    display: flex;
    width: 50%;
    height:660px;
    overflow:hidden;
  }
  .bigImage {
    width: 100%;
    height: 100%;
    border: solid rgb(95,95,95);
    border-width: 1px;
    opacity: ${p => p.opacity.bigImage};
  }

  .smallImageContainer {
    display:flex;
    flex-wrap: wrap;
    width: 50%;
    overflow:hidden;
  }

  .smallImageDiv1, .smallImageDiv2, .smallImageDiv3, .smallImageDiv4   { 
    width:  50%;
    height:330px; 
    overflow:hidden;
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
  
  .bigImage:hover, .smallImage1:hover, .smallImage2:hover, .smallImage3:hover, .smallImage4:hover {
  transform: scale(1.05);
  }


  img:hover {
    cursor: pointer;
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
    let listingId = window.location.href.slice(31, -1);
    axios.get(`http://127.0.0.1:3003/listings/${listingId}/images`)
      .then(({ data }) => {
        console.log(data);
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
        <div className={`smallImageDiv${i}`}>
          <img
            alt=""
            key={ i }
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
    
    // <Button className="Button3">⎗ Share</Button>
    // <Button className="Button2"> ♡ Save</Button>
    // <Button className="Button"> View Photos</Button>

    return (
      <div>

        <Wrapper opacity={opacity}>

          { /* eslint-disable */ }
          <div className="grid-containerImage">

            <div className="bigPictureContainer">
              <img
                alt= ""
                onMouseEnter={(e) => this.handleHover(e.target)} 
                onMouseLeave={(e) => this.handleMouseLeave(e)} 
                onClick = {({target}) => this.props.handleClick('gallery', target, 0)} 
                className = "bigImage" 
                src={images[0].imageUrl} 
              />
            </div>

            <div className="smallImageContainer">
              {this.createCollage()}
            </div>

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
