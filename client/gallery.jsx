import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import styled from 'styled-components';
import axios from 'axios';
import sampleUrls from '../data/image';

const listingId = '4acf2894-79e8-443c-b3d9-9f98fe6ed1af';

const Image = styled.img`
opacity: 0.4;
width: 100%;
height: 100%;
transition: all 0.1s ease-in-out;
`;

const Slides = styled.div`
width: 100%;
height:100%;
margin: 0 5px;
transition: all 0.3s linear;
transform: translate(${p => p.shiftPixels}px, 0%);
`;

const SlideText = styled.div`
position: absolute;
z-index: 100;
top:87%;
left: 20.5%;
color:white;
`;
const Content = styled.div`
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
`;


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      images: sampleUrls,
      prevClicked: `navigateImage${props.clickedImg}`,
      shiftPixels: 0,
      shiftFactor: 0,
    };

    $('#myModal').css('display', 'block');
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleLeftRight = this.handleLeftRight.bind(this);
    this.createSlideshowImages = this.createSlideshowImages.bind(this);
    this.showCurImageInfo = this.showCurImageInfo.bind(this);
  }

  componentDidMount() {
    axios.get(`/listings/${listingId}/images`)
      .then(({ data }) => {
        const newImages = data[0].images;
        console.log(newImages);
        this.setState(
          {
            images: newImages,
            shiftFactor: 2750 / newImages.length, // 2750 is approximate
          },
        );
        const { clickedImg } = this.props;
        $(`#navigateImage${clickedImg}`).css('opacity', '1');
        this.showSlides(clickedImg);
      });
  }

  showSlides(n) {
    const { images } = this.state;
    const $enlargedImage = $('#enlargedImage');
    const url = images[n].imageUrl;
    $enlargedImage.html(`<img className ='slideShowImage' id='curImg' src=${url}></img>`);
    this.setState({ n });
  }


  handleImageClick(n, { id }) {
    console.log('n:', n);
    console.log('sampleUrls.length:', sampleUrls.length);
    const { prevClicked, shiftPixels, shiftFactor } = this.state;
    let amountToShift = shiftPixels;
    if (prevClicked !== null) {
      $(`#${prevClicked}`).css('opacity', '0.4');
    }

    $(`#${id}`).css('opacity', '1');

    if (n < sampleUrls.length && n > 3) {
      amountToShift = -((n - 4) * shiftFactor);
    } else if (n < 3) {
      amountToShift = 0;
    }

    this.setState(
      {
        n,
        prevClicked: id,
        shiftPixels: amountToShift,
      },
    );

    this.showSlides(n);
  }

  handleLeftRight(direction) {
    let { n } = this.state;
    const oldN = n;
    if (direction === 'left') {
      n -= 1;
    } else if (direction === 'right') {
      n += 1;
    }

    let value = {};
    value.id = `navigateImage${n}`; 

    this.setState({ prevClicked: `navigateImage${oldN}` });
    this.handleImageClick(n, value);
    this.showSlides(n);
  }

  handleMouseEnter({ id }) {
    $(`#${id}`).css('opacity', '1');
  }

  handleMouseLeave({ id }) {
    const { prevClicked } = this.state;

    if (prevClicked !== id) {
      $(`#${id}`).css('opacity', '0.4');
    }
  }

  createSlideshowImages() {
    const { shiftPixels, images } = this.state;
    const slideshows = [];
    images.forEach((image, idx) => {
      const DOM = (
        <Slides shiftPixels={shiftPixels}>
          <Image
            alt="slideShowImage"
            onMouseEnter={e => this.handleMouseEnter(e.target)}
            onMouseLeave={e => this.handleMouseLeave(e.target)}
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

  // TODO:
  // Make a array state of length 9 and store the values there. Give each image a fixed size
  render() {
    const { handleClick, images } = this.props;

    return (
      <div className="gallery">

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

        <div id="myModals" className="modal">

          <div id="enlargedImage">
          </div>
          <SlideText>{this.showCurImageInfo()}</SlideText>
          <Content>
            <SlideShow>
              {this.createSlideshowImages()}
            </SlideShow>
          </Content>

        </div>
      </div>


    );
  }
}

Gallery.propTypes = {
  clickedImg: PropTypes.number,
  handleClick: PropTypes.func,
};

export default Gallery;
