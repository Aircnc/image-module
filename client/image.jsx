import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component {

	constructor(props) {
		super(props);
	} 


	render() {
		return(
			<div className="grid-container">
			  <div className="item2"><img className = 'smallImage' src='https://a0.muscache.com/im/pictures/ca58dca6-6b4e-4fc5-8c1e-41cb6572348f.jpg?aki_policy=large' /></div>
			  <div className="item3"><img className = 'bigImage' src='https://a0.muscache.com/im/pictures/3329a22a-d736-48a9-9cf9-78605d57dce2.jpg?aki_policy=xx_large' /></div>  
			  <div className="item4"><img className = 'smallImage' src='https://a0.muscache.com/im/pictures/ca58dca6-6b4e-4fc5-8c1e-41cb6572348f.jpg?aki_policy=large' /></div>
			  <div className="item5"><img className = 'smallImage' src='https://a0.muscache.com/im/pictures/ca58dca6-6b4e-4fc5-8c1e-41cb6572348f.jpg?aki_policy=large' /></div>
			  <div className="item6"><img className = 'smallImage' src='https://a0.muscache.com/im/pictures/ca58dca6-6b4e-4fc5-8c1e-41cb6572348f.jpg?aki_policy=large' /></div>
			</div>
		)
	};
}




ReactDOM.render(<Image />, document.getElementById('app'));