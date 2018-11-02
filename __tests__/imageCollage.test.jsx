import React from 'react'; 
import {mount, shallow, render} from 'enzyme';
import ImageCollage from '../client/imageCollage';
import Gallert from '../client/gallery';
import sampleUrls from '../data/image';
import Gallery from '../client/gallery';


describe('<ImageCollage />', () => {
  
  it('should have 2 states', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    const length = Object.keys(wrapper.state()).length;
    expect(length).toEqual(2);
  });

  it('opacity should have 5 keys', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    const length = Object.keys(wrapper.state().opacity).length;
    expect(length).toEqual(5);
  });

  it('images prop should have a length', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    const images = wrapper.state().images;
    expect(images.length).not.toBe(0);
  });
  it('container should have 8 child nodes', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    const children = wrapper.find('.grid-container').children();
    console.log(children);
    expect(children.length).toEqual(5);
  });

  it('functions should return', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    const instance = wrapper.instance();
    expect(instance).toBeDefined();
    expect(instance.handleMouseLeave).toBeDefined();
    expect(instance.handleHover).toBeDefined();
  });

  xit('OnClick on images should return a function', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    wrapper.find('.smallImage3').simulate('click');
    wrapper.find('.smallImage4').simulate('click');
  });

  it('OnMouseLeave work for all images', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable

    wrapper.setState({
      opacity: {
        smallImage1: 0.1,
        smallImage2: 0.1,
        smallImage3: 0.1,
        smallImage4: 0.1,
        bigImage: 0.1,
      },
    });

    Object.keys(wrapper.state().opacity).forEach((key) => {
      expect(wrapper.state().opacity[key]).toBe(0.1);
    });

    wrapper.find('.smallImage3').simulate('mouseleave');

    Object.keys(wrapper.state().opacity).forEach((key) => {
      expect(wrapper.state().opacity[key]).toBe(1);
    });

    wrapper.setState({
      opacity: {
        smallImage1: 0.1,
        smallImage2: 0.1,
        smallImage3: 0.1,
        smallImage4: 0.1,
        bigImage: 0.1,
      },
    });

    wrapper.find('.smallImage4').simulate('mouseleave');

    Object.keys(wrapper.state().opacity).forEach((key) => {
      expect(wrapper.state().opacity[key]).toBe(1);
    });
  });

  it('opacity should change correctly depending on which image is mouse-entered', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    wrapper.find('.smallImage1').simulate('mouseenter');
   // wrapper.update();

    for (let i = 1; i <= 4; i += 1) {
      if (i === 1) {
        expect(wrapper.state().opacity.smallImage1).toBe(1);
      } else {
        expect(wrapper.state().opacity[`smallImage${i}`]).toBe(0.4);
      }
    }
    
    wrapper.find('.smallImage2').simulate('mouseenter');
    //wrapper.update();

    for (let i = 1; i <= 4; i += 1) {
      if (i === 2) {
        expect(wrapper.state().opacity.smallImage2).toBe(1);
      } else {
        expect(wrapper.state().opacity[`smallImage${i}`]).toBe(0.4);
      }
    }
    
    wrapper.find('.smallImage3').simulate('mouseenter');
    //wrapper.update();

    for (let i = 1; i <= 4; i += 1) {
      if (i === 3) {
        expect(wrapper.state().opacity.smallImage3).toBe(1);
      } else {
        expect(wrapper.state().opacity[`smallImage${i}`]).toBe(0.4);
      }
    }
    
    wrapper.find('.smallImage4').simulate('mouseenter');
    //wrapper.update();

    for (let i = 1; i <= 4; i += 1) {
      if (i === 4) {
        expect(wrapper.state().opacity.smallImage4).toBe(1);
      } else {
        expect(wrapper.state().opacity[`smallImage${i}`]).toBe(0.4);
      }
    }
    
    wrapper.find('.bigImage').simulate('mouseenter');
    //wrapper.update();

    for (let i = 1; i <= 4; i += 1) {
      expect(wrapper.state().opacity[`smallImage${i}`]).toBe(0.4);
    }
  });

  it('onMouseLeave should reset all opacities to 1', () => {
    const wrapper = mount(<ImageCollage />); // mount/render/shallow when applicable
    wrapper.setState({
      opacity: {
        smallImage1: 0.1,
        smallImage2: 0.1,
        smallImage3: 0.1,
        smallImage4: 0.1,
        bigImage: 0.1,
      },
    });
    wrapper.update();

    Object.keys(wrapper.state().opacity).forEach((key) => {
      expect(wrapper.state().opacity[key]).toBe(0.1);
    });

    const { handleMouseLeave } = wrapper.instance();
    const fakeEvent = {};
    fakeEvent.target = { className: 'fakeImageClass' };
    handleMouseLeave(fakeEvent);

    Object.keys(wrapper.state().opacity).forEach((key) => {
      expect(wrapper.state().opacity[key]).toBe(1);
    });
  });

});
