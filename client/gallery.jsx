import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import styled, { css } from 'styled-components';
import axios from 'axios';
import sampleUrls from '../data/image';

const listingId = '46567b4d-9778-4403-89df-4ee08bc0f8cb';

const Image = styled.img`
width: 100%;
height: 100%;
transition: all 0.1s ease-in-out;

:hover {
  opacity: 1;
}
:not(:hover) {
  opacity: 0.4;
}
`;

const Slides = styled.div`
transition: all 0.3s linear;
width: 100%;
height:100%;
margin: 0 5px;
transition: all 0.3s linear;
transform: translate(${p => p.shiftPixels}px, 0%);

.keepOpacity {
  opacity: 1;
}

`;

const SlideText = styled.div`
transition: all 0.3s linear;
position: absolute;
z-index: 100;
top:86%;
left: 20.5%;
color:white;
width: 59%;
display:flex;
justify-content:space-between;
${p => !p.showSlideShow && css`top: 96%;`};
`;
const Content = styled.div`
transition: all 0.3s linear;
position: relative;
overflow: hidden;
top:120px;
width: 60%;
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
position: relative;
top: 84px;
width: 60%;
height:70%;
margin: 0 auto;
background-color: #262626;
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      images: sampleUrls,
      prevClicked: props.clickedImg,
      shiftPixels: 0,
      shiftFactor: 0,
      showSlideShow: true,
    };

    $('#myModal').css('display', 'block');
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleLeftRight = this.handleLeftRight.bind(this);
    this.createSlideshowImages = this.createSlideshowImages.bind(this);
    this.showCurImageInfo = this.showCurImageInfo.bind(this);
    this.handleShowPhotoList = this.handleShowPhotoList.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }

  componentDidMount() {
    axios.get(`/listings/${listingId}/images`)
      .then(({ data }) => {
        const newImages = data[0].images;
        this.setState(
          {
            images: newImages,
            shiftFactor: 2750 / newImages.length, // 2750 is approximate
          },
        );

        const { prevClicked } = this.state;
        const { n } = this.props;

        prevClicked.add('keepOpacity');
        this.showSlides(n);
      });
  }

  showSlides(n) {
    const { images } = this.state;
    const $enlargedImage = $('#enlargedImage');
    const url = images[n].imageUrl;
    $enlargedImage.html(`<img className ='slideShowImage' id='curImg' src=${url}></img>`);
    this.setState(
      {
        n,
      },
    );
  }

  handleImageClick(n, { classList }) {
    const { shiftPixels, shiftFactor } = this.state;
    let { prevClicked } = this.state;

    if (typeof prevClicked !== 'string') {
      console.log('removing keepOpacity');
      prevClicked.remove('keepOpacity');
    }

    let amountToShift = shiftPixels;

    classList.add('keepOpacity');
    prevClicked = classList;

    if (n < sampleUrls.length && n > 3) {
      amountToShift = -((n - 4) * shiftFactor);
    } else if (n < 3) {
      amountToShift = 0;
    }

    this.setState(
      {
        n,
        prevClicked,
        shiftPixels: amountToShift,
      },
    );

    this.showSlides(n);
  }

  handleLeftRight(direction) {
    let { n } = this.state;
    const { images } = this.state;

    const oldN = n;
    if (direction === 'left') {
      if (n !== 0) {
        n -= 1;
      }
    } else if (direction === 'right') {
      if (n !== images.length - 1) {
        n += 1;
      }
    }
    const value = {};
    value.id = `navigateImage${n}`;
    this.setState(
      {
        prevClicked: `navigateImage${oldN}`,
      },
    );
    this.handleImageClick(n, value);
    this.showSlides(n);
  }

  createSlideshowImages() {
    const { shiftPixels, images } = this.state;
    const slideshows = [];
    images.forEach((image, idx) => {
      const DOM = (
        <Slides shiftPixels={shiftPixels}>
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
    const { showSlideShow } = this.state;

    return (
      <div className="gallery">

        { /* eslint-disable */ }

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

        <Modal id="myModals">
          <LargeImage id="enlargedImage" />
          <SlideText showSlideShow={showSlideShow}>
            {this.showCurImageInfo()}
            <div id="handleShowPhotoList" onClick={() => this.handleShowPhotoList()}>
              {(showSlideShow ? 'Hide photo list ▼' : 'Show photo list ▲')}
            </div>
          </SlideText>
          <Content>
            <SlideShow showSlideShow={showSlideShow}>
              {this.createSlideshowImages()}
            </SlideShow>
          </Content>
          </Modal>
      </div>
    );

        { /* eslint-enable */ }
  }
}

Gallery.propTypes = {
  clickedImg: PropTypes.number,
  handleClick: PropTypes.func,
  n: PropTypes.number,
};

Gallery.defaultProps = {
  clickedImg: 1,
  handleClick: () => {
  },
  n: 1,
};

export default Gallery;
