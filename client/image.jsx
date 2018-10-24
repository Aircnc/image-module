import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component {

	constructor(props) {
		super(props);
	} 



	render() {

		return(
			<div className='grid-container'>
			<img className ='image1' src='https://a0.muscache.com/im/pictures/3329a22a-d736-48a9-9cf9-78605d57dce2.jpg?aki_policy=xx_large'/>
			<img className ='image2' src='https://a0.muscache.com/im/pictures/4ce46b28-5c21-4d52-9732-920c6c7b581a.jpg?aki_policy=large' />
			<img className ='image3' src='https://a0.muscache.com/im/pictures/496f63f7-77b9-4e57-b73c-8daf0d2e7903.jpg?aki_policy=large' />
			<img className ='image4' src='https://a0.muscache.com/im/pictures/ca58dca6-6b4e-4fc5-8c1e-41cb6572348f.jpg?aki_policy=large' />
			</div>
		)
	};
}




ReactDOM.render(<Image />, document.getElementById('app'));