import React from 'react';
import { Button } from 'semantic-ui-react';
import $ from 'jquery';
import sampleUrls from './../data/image.js';

class ImageCollage extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.addImgEffects();
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
    return (

      <div className="grid-container">
        <Button className='item6 Button'> View Photos</Button>
        <Button className='item4 Button2'> Share</Button>
        <Button className='item4 Button3'> Save</Button>

        <div className="item2"><img onClick = {() => this.props.handleClick('gallery', 9)} className = 'smallImage1' src={sampleUrls[9]} /></div>
        <div className="item3"><img onClick = {() => this.props.handleClick('gallery', 10)} className = 'bigImage' src={sampleUrls[10]} /></div>  
        <div className="item4"><img onClick = {() => this.props.handleClick('gallery', 11)} className = 'smallImage2' src={sampleUrls[11]} /></div>
        <div className="item5"><img onClick = {() => this.props.handleClick('gallery', 12)} className = 'smallImage3' src={sampleUrls[12]} /></div>
        <div className="item6"><img onClick = {() => this.props.handleClick('gallery', 13)} className = 'smallImage4' src={sampleUrls[13]} /></div>
      </div>

    );
  }
}



export default ImageCollage;