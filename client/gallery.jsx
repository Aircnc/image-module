import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import axios from 'axios';
import sampleUrls from '../data/image';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

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
transition: all 0.150s linear;
transform: translate(${p => p.shiftPixels}px, 0%);
`;

const Content = styled.div`
position: relative;
overflow: hidden;
top:120px;
width: 60%;
height: 70px;
background-color: #262626;
left: 16.3%;
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
      prevClicked: null,
      curClicked: null,
      shiftPixels: 0,
    };

    $('#myModal').css('display', 'block');
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleLeftRight = this.handleLeftRight.bind(this);
    this.createSlideshowImages = this.createSlideshowImages.bind(this);
  }

  componentDidMount() {
    const { clickedImg } = this.props;
    this.showSlides(clickedImg);
  }

  showSlides(n) {
    const $enlargedImage = $('#enlargedImage');
    const url = sampleUrls[n];
    $enlargedImage.html(`<img className ='slideShowImage' id='curImg' src=${url}></img>`);
    this.setState({ n });
  }


  handleImageClick(n, { id }) {
    console.log('n:', n);
    console.log('sampleUrls.length:', sampleUrls.length);
    const { prevClicked, shiftPixels } = this.state;
    let amountToShift = shiftPixels;
    if (prevClicked !== null) {
      $(`#${prevClicked}`).css('opacity', '0.4');
    }

    if (n < sampleUrls.length && n > 3) {
      amountToShift = -((n - 4) * 115.375);
    } else if (n < 3) {
      amountToShift = 0;
    }

    this.setState(
      {
        prevClicked: id,
        shiftPixels: amountToShift,
      },
    );

    $(`#${id}`).css('opacity', '1');
    this.showSlides(n);
  }

  handleLeftRight(direction) {
    let { n } = this.state;
    if (direction === 'left') {
      n -= 1;
    } else if (direction === 'right') {
      n += 1;
    }

    this.setState({ n });
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
    const { shiftPixels } = this.state;
    const slideshows = [];
    sampleUrls.forEach((url, idx) => {
      const DOM = (
        <Slides shiftPixels={shiftPixels}>
          <Image alt="slideShowImage" onMouseEnter={e => this.handleMouseEnter(e.target)} onMouseLeave={e => this.handleMouseLeave(e.target)} onClick={e => this.handleImageClick(idx, e.target)} id={`navigateImage${idx}`} src={url} />
        </Slides>
      );

      slideshows.push(DOM);
    });

    return slideshows;
  }

  render() {
    const { handleClick } = this.props;

    return (
      <div className="gallery">

        <div id="return" onClick={() => handleClick('imageCollege')}>
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

          <div id="enlargedImage" />

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
