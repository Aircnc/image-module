import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery.jsx';
import ImageCollage from './imageCollage.jsx';


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'imageCollege',
      clickedImg: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(newView, n) {
    let { clickedImg } = this.state;

    if (newView === 'gallery') {
      console.log('newView:', newView);
      console.log('n: ', n);
      clickedImg = n;
    }

    this.setState({
      view: newView,
      clickedImg,
    });
  }

  handleClick(e) {
    console.log(e.target);
    this.changeView('gallery');
  }

  renderView() {
    const { view, clickedImg } = this.state;
    let DOM;
    if (view === 'imageCollege') {
      DOM = <ImageCollage handleClick={this.changeView} />;
    } else if (view === 'gallery') {
      DOM = <Gallery handleClick={this.changeView} clickedImg={clickedImg} />;
    }

    return DOM;
  }

  render() {
    return this.renderView();
  }
}
ReactDOM.render(<Image />, document.getElementById('app'));
