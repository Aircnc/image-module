import React from 'react';
import { Button } from 'semantic-ui-react';
import $ from 'jquery';
import axios from 'axios';
import sampleUrls from './../data/image.js';
const listingId = '4acf2894-79e8-443c-b3d9-9f98fe6ed1af';

class ImageCollage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: sampleUrls,
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
    let $img = $('img');
    let $container = $('.grid-container');
    let imageClasses = [];

    $img.on('mouseenter', (event) => {
      let hoveredClassName = event.target.className;   	
      let curClass;
      let includeClass;

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