import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery.jsx';
import ImageCollage from './ImageCollage.jsx';
import { Button } from 'semantic-ui-react';


class Image extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			view: 'imageCollege'
		}

		this.handleClick = this.handleClick.bind(this);
		this.changeView = this.changeView.bind(this);
		this.renderView = this.renderView.bind(this);

	} 

	changeView(newView) {
	this.setState({
		view: newView
	});
	}

	handleClick(e) {
		console.log(e.target);
		this.changeView('gallery');
	};


	renderView() {
		let {view} = this.state;


		if (view === 'imageCollege') {
			return <ImageCollage handleClick = {this.handleClick} />
		} else if (view === 'gallery') {
			return <Gallery handleClick = {this.handleClick} />
		}
	};

	render() {
		return this.renderView();
	};
}




ReactDOM.render(<Image />, document.getElementById('app'));