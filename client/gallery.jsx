import React from 'react';
import $ from 'jquery';
import sampleUrls from './../data/image.js';


class Gallery extends React.Component {

	constructor(props) {
		super(props);

	 $('#myModal').css('display','block');

	}


	render() {

	console.log(sampleUrls);

		return (

			<div className ='gallery'> 

				<div id='return'>
					<svg viewBox="0 0 100 100" height='118px' width='118px'>
						<path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" />
					</svg>
				</div>

				<div id='leftButton'>
					<svg viewBox="0 0 100 100" height='430px' width='430px'>
						<path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
					</svg>
				</div>

				<div id='rightButton'>
					<svg viewBox="0 0 100 100" height='430px' width='430px'>
						<path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
					</svg>
				</div>

				<div id="myModal" class="modal">

					<div className='modalContent'>
					
					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage1' src={sampleUrls[0]}></img>
					    </div>

					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage2' src={ sampleUrls[1] } ></img>
					    </div>

					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage3' src={sampleUrls[2]} ></img>
					    </div>

					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage4' src={sampleUrls[3]} ></img>
						</div>

					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage5' src={sampleUrls[4]} ></img>
						</div>

					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage6' src={sampleUrls[5]} ></img>
						</div>

					    <div className="mySlides">
					      <div className="numbertext"></div>
					      <img className ='slideShowImage' id='navigateImage7' src={sampleUrls[6]} ></img>
						</div>


	    		</div>
			</div>

			</div>


			)
	}
}



export default Gallery;