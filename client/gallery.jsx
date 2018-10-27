import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import sampleUrls from '../data/image';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      prevClicked: null,
    };

    $('#myModal').css('display', 'block');
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleLeftRight = this.handleLeftRight.bind(this);
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
    const { prevClicked } = this.state;
    if (prevClicked !== null) {
      $(`#${prevClicked}`).toggleClass('increaseOpacity');
    }

    this.setState({ prevClicked: id });
    $(`#${id}`).toggleClass('increaseOpacity');
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

  render() {
    let { handleClick } = this.props;

    return (
      <div className="gallery">

        <div id="return" onClick={() => handleClick('imageCollege')}>
          <svg viewBox="0 0 100 100" height="118px" width="118px">
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" />
          </svg>
        </div>

        <div id='leftButton' onClick={() => this.handleLeftRight('left')}>
          <svg viewBox="0 0 100 100" height='430px' width='430px'>
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
          </svg>
        </div>

        <div id='rightButton' onClick={() => this.handleLeftRight('right')} >
          <svg viewBox="0 0 100 100" height='430px' width='430px'>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
          </svg>
        </div>

        <div id="myModals" className="modal">

          <div id='enlargedImage'></div>
          
          <div className='modalContent'>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(9, e.target)} className ='slideShowImage' id='navigateImage1' src={sampleUrls[9]}></img>
            </div>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(10, e.target)} className ='slideShowImage' id='navigateImage2' src={ sampleUrls[10] } ></img>
            </div>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(11, e.target)} className ='slideShowImage' id='navigateImage3' src={sampleUrls[11]} ></img>
            </div>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(12, e.target)} className ='slideShowImage' id='navigateImage4' src={sampleUrls[12]} ></img>
            </div>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(13, e.target)} className ='slideShowImage' id='navigateImage5' src={sampleUrls[13]} ></img>
            </div>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(14, e.target)} className ='slideShowImage' id='navigateImage6' src={sampleUrls[14]} ></img>
            </div>

            <div className="mySlides">
              <div className="numbertext"></div>
              <img onClick={(e) => this.handleImageClick(15, e.target)} className ='slideShowImage' id='navigateImage7' src={sampleUrls[15]} ></img>
            </div>


          </div>
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
