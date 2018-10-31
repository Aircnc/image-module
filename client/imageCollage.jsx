import React from 'react';
import { Button } from 'semantic-ui-react';
import $ from 'jquery';
import axios from 'axios';
import sampleUrls from './../data/image.js';
const listingId = '46567b4d-9778-4403-89df-4ee08bc0f8cb';

class ImageCollage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: sampleUrls,
      effectsAdded: false,
    };
  }

  componentDidMount() {
    axios.get(`/listings/${listingId}/images`)
      .then(({ data }) => {
        const newImages = data[0].images;
        console.log(newImages);
        this.setState({ images: newImages });
        this.addImgEffects();
      });

  }

  addImgEffects() {
    const { effectsAdded } = this.state;

    const $img = $('img');
    const $container = $('.grid-container');
    const imageClasses = [];

    $img.on('mouseenter', (event) => {
      const hoveredClassName = event.target.className;
      let curClass;

      for (let i = 3; i < 8; i++) { // First 3 elements are buttons
        curClass = $container[0].childNodes[i].firstChild.className;
        imageClasses.push(curClass);
        if (curClass !== hoveredClassName) {
          $(`.${curClass}`).css('opacity', '0.65');
        }
      }
    });

    $img.on('mouseleave', (event) => {
      let curClass;
      for (let i = 0; i < imageClasses.length; i++) {
        $(`.${imageClasses[i]}`).css('opacity', '1');
      }
    });
  }


  render() {
    const { images } = this.state;

    return (
      <div className="grid-container">
        <Button className="item6 Button"> View Photos</Button>
        <Button className="item4 Button2"> Share</Button>
        <Button className="item4 Button3"> Save</Button>

        <div className="item2"><img onClick = {() => this.props.handleClick('gallery', 0)} className = 'bigImage' src={images[0].imageUrl} /></div>  
        <div className="item3"><img onClick = {() => this.props.handleClick('gallery', 1)} className = 'smallImage1' src={images[1].imageUrl} /></div>
        <div className="item4"><img onClick = {() => this.props.handleClick('gallery', 2)} className = 'smallImage2' src={images[2].imageUrl} /></div>
        <div className="item5"><img onClick = {() => this.props.handleClick('gallery', 3)} className = 'smallImage3' src={images[3].imageUrl} /></div>
        <div className="item6"><img onClick = {() => this.props.handleClick('gallery', 4)} className = 'smallImage4' src={images[4].imageUrl} /></div>
      </div>

    );
  }
}
export default ImageCollage;
