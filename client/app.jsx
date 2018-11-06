import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery.jsx';
import ImageCollage from './imageCollage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'imageCollege',
      clickedImg: 0,
      n: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(newView, { classList } = [], n) {
    let { clickedImg } = this.state;

    if (newView === 'gallery') {
      console.log('newView:', newView);
      console.log('n: ', classList);
      clickedImg = classList;
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

  renderView() {
    const { view, n } = this.state;
    let DOM;
    if (view === 'imageCollege') {
      DOM = <ImageCollage handleClick={this.changeView} />;
    } else if (view === 'gallery') {
      DOM = <Gallery handleClick={this.changeView} n={n} />;
    }
    return DOM;
  }

  render() {
    return this.renderView();
  }
}

ReactDOM.render(<App />, document.getElementById('luan'));
export default App;
