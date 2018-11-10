import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import axios from 'axios';
import sampleUrls from '../data/image';
import { Button } from 'semantic-ui-react';

const Wrapper = styled.div`
  z-index:100;
  width: 100%;
  height: 120vh;
  background-color: #262626;
  
`;
const Image = styled.img`
cursor: pointer;
opacity: 0.4;
width: 100%;
height: 100%;
transition: all 0.1s ease-in-out;
  :hover {
    opacity: 1;
  }
`;

const Slides = styled.div`
transition: all 0.3s linear;
width: 100%;
height:100%;
margin: 0 5px;
transform: translate(${p => p.shiftPixels}px, 0%);
#navigateImage${p => p.n} {
  opacity: 1;
}
`;

const SlideText = styled.div`
transition: all 0.3s linear;
position: absolute;
z-index: 100;
top:105%;
color:white;
width: 100%;
display:flex;
justify-content:space-between;
${p => !p.showSlideShow && css`top: 110%;`};
`;
const Content = styled.div`
transition: all 0.3s linear;
position: relative;
overflow: hidden;
top:120px;
width: 66%;
height: 70px;
background-color: #262626;
margin: 0 auto;
margin-top: 4%;
`;

const SlideShow = styled.div`
width:230%;
height: 100%;
display: flex;
justify-content: space-between;
position:relative;
transition: all 0.3s linear;
${p => !p.showSlideShow && css`transform: translateY(70px);`};
`;

const Modal = styled.div`
width: 100%;
height:100%;
`;

const LargeImage = styled.div`
margin: 0 auto;
position: relative;
top: 84px;
width: 60%;
height:60%;
background-color: #262626;
`;

const LargeImgTag = styled.img`
width: 100%;
height:100%;
`;

const ButtonWrapper = styled.div`
#leftButton {
  fill: white;
  position: absolute;
  left: 0%;
  top:40%;
}
#rightButton {
  fill: white;
  position: absolute;
  left: 96%;
  top:40%;
}
#return {
  fill: white;
  position: absolute;
  left:96.5%;
  top:18%;
  width: 30px;
}
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      images: sampleUrls,
      url: '',
      shiftPixels: 0,
      shiftFactor: 0,
      showSlideShow: true,
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleLeftRight = this.handleLeftRight.bind(this);
    this.createSlideshowImages = this.createSlideshowImages.bind(this);
    this.showCurImageInfo = this.showCurImageInfo.bind(this);
    this.handleShowPhotoList = this.handleShowPhotoList.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }

  componentDidMount() {
    const listingId = window.location.pathname;
    console.log('listingId in gallery: ', listingId);
    axios.get(`http://18.191.17.4${listingId}images`)
      .then(({ data }) => {
        const newImages = data[0].images;
        this.setState(
          {
            images: newImages,
            shiftFactor: 2600 / newImages.length, // 2750 is approximate
          },
        );

        const { n } = this.props;
        this.showSlides(n);
      });
  }

  showSlides(n) {
    const { images } = this.state;
    const url = images[n].imageUrl;
    this.setState(
      {
        n,
        url,
      },
    );
  }

  handleImageClick(n) {
    const { shiftPixels, shiftFactor } = this.state;
    let amountToShift = shiftPixels;

    if (n < sampleUrls.length && n > 3) {
      amountToShift = -((n - 4) * shiftFactor);
    } else if (n < 3) {
      amountToShift = 0;
    }

    this.setState(
      {
        n,
        shiftPixels: amountToShift,
      },
    );

    this.showSlides(n);
  }

  handleLeftRight(direction) {
    let { n } = this.state;
    const { images } = this.state;

    if (direction === 'left') {
      if (n !== 0) {
        n -= 1;
      }
    } else if (direction === 'right') {
      if (n !== images.length - 1) {
        n += 1;
      }
    }

    this.handleImageClick(n);
    this.showSlides(n);
  }

  createSlideshowImages() {
    const { shiftPixels, images, n } = this.state;
    const slideshows = [];
    images.forEach((image, idx) => {
      const DOM = (
        <Slides shiftPixels={shiftPixels} n={n}>
          <Image
            alt="slideShowImage"
            onClick={e => this.handleImageClick(idx, e.target)}
            id={`navigateImage${idx}`}
            src={image.imageUrl}
          />
        </Slides>
      );

      slideshows.push(DOM);
    });

    return slideshows;
  }

  showCurImageInfo() {
    const { n, images } = this.state;
    const numImages = images.length;

    return (`${n + 1} / ${numImages}: ${images[n].description}`);
  }

  handleShowPhotoList() {
    const { showSlideShow } = this.state;
    this.setState(
      {
        showSlideShow: !showSlideShow,
      },
    );
  }

  render() {
    const { handleClick } = this.props;
    const { showSlideShow, url } = this.state;

    return (
      <div className="gallery">

        { /* eslint-disable */ }
      <Wrapper>
        <ButtonWrapper>
          <div id="return" onClick={() => handleClick('imageCollege') }>
            <svg viewBox="0 0 100 100" height="118px" width="118px">
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" />
            </svg>
          </div>

          <div id='leftButton' onClick={() => this.handleLeftRight('left')}>
            <svg viewBox="0 0 100 100" height="430px" width="430px">
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
            </svg>
          </div>

          <div id='rightButton' onClick={() => this.handleLeftRight('right')}>
            <svg viewBox="0 0 100 100" height="430px" width="430px">
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
            </svg>
          </div>
        </ButtonWrapper>




        <Modal id="myModals">
          <LargeImage >
              <LargeImgTag 
              id='curImg' 
              src= {url} /> 
            <SlideText showSlideShow={showSlideShow}>
              {this.showCurImageInfo()}
              <div id="handleShowPhotoList" onClick={() => this.handleShowPhotoList()}>
                {(showSlideShow ? 'Hide photo list ▼' : 'Show photo list ▲')}
              </div>
            </SlideText>
          </LargeImage>

          <Content>
            <SlideShow showSlideShow={showSlideShow}>
              {this.createSlideshowImages()}
            </SlideShow>
          </Content>
          </Modal>
            </Wrapper>
      </div>
    );
        { /* eslint-enable */ }
  }
}

Gallery.propTypes = {
  handleClick: PropTypes.func,
  n: PropTypes.number,
};

Gallery.defaultProps = {
  handleClick: () => {
  },
  n: 1,
};

export default Gallery;
