import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery.jsx';
// import Nav from './Nav.jsx';
import ImageCollage from './imageCollage.jsx';
import Modal from 'react-responsive-modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'imageCollege',
      clickedImg: 0,
      n: 0,
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  changeView(newView, { classList } = [], n) {
    let { clickedImg } = this.state;

    if (newView === 'gallery') {
      console.log('newView:', newView);
      console.log('n: ', classList);
      clickedImg = classList;
      this.setState({
        open: true,
      });
    }

    this.setState({
      view: newView,
      clickedImg,
      n,
    });
  }

  handleClick(e) {
    console.log(e.target);
    this.changeView('gallery');
  }

  handleClose() {
    this.setState({open: false});
  }
  renderView() {
    const { view, n, open } = this.state;
    let DOM;
    if (view === 'imageCollege') {
      DOM = <ImageCollage handleClick={this.changeView} />;
    } else if (view === 'gallery') {
      DOM = (
        <div>
       <Gallery handleClick={this.changeView} n={n} />
        </div>
      );
    };
    return DOM;
  }

  render() {
    return this.renderView();
  }
}

ReactDOM.render(<App />, document.getElementById('images'));
export default App;
