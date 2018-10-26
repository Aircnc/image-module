import React from 'react';



class Gallery extends React.Component {


	constructor(props) {
		super(props);
	}



	render() {

		return (


			<div className ='gallery'> 
				<div id='rightButton'>
					<svg viewBox="0 0 100 100" height='400px' width='400px'>
						<path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
					</svg>
				</div>

				<div id='leftButton'>
					<svg viewBox="0 0 100 100" height='400px' width='400px'>
						<path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
					</svg>
				</div>

			</div>


			)
	}
}



export default Gallery;