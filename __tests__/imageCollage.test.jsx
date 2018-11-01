import React from 'react'; 
import {mount, shallow, render} from 'enzyme';
import ImageCollage from '../client/imageCollage';
import Gallert from '../client/gallery';
import sampleUrls from '../data/image';
import Gallery from '../client/gallery';


describe('<ImageCollage />', () => {
  it('should have 2 states', () => {
    const wrapper = shallow(<ImageCollage />); // mount/render/shallow when applicable
    const length = Object.keys(wrapper.state()).length;
    expect(length).toEqual(2);
  });

  it('images prop should have a length', () => {
    const wrapper = shallow(<ImageCollage />); // mount/render/shallow when applicable
    const images = wrapper.state().images;
    expect(images.length).not.toBe(0);
  });
  it('effects should be added aftering calling addImgEffects()', () => {
    const wrapper = shallow(<ImageCollage />); // mount/render/shallow when applicable
    expect(wrapper.state().effectsAdded).toBe(false);
    const { addImgEffects } = wrapper.instance();
    addImgEffects();

    expect(wrapper.state().effectsAdded).toBe(true);
  });
  it('container should have 8 child nodes', () => {
    const wrapper = shallow(<ImageCollage />); // mount/render/shallow when applicable
    const children = wrapper.find('.grid-container').children();
    console.log(children);
    expect(children.length).toEqual(5);
  });

  it('functions should return', () => {
    const wrapper = shallow(<ImageCollage />); // mount/render/shallow when applicable
    const instance = wrapper.instance();
    expect(instance).toBeDefined();
    expect(instance.addImgEffects).toBeDefined();
  });

  xit('should update current image correctly', () => {
    const wrapper1 = shallow(<ImageCollage />); // mount/render/shallow when applicable
    const wrapper2 = shallow(<Gallery />); // mount/render/shallow when applicable

    wrapper1.find('.smallImage1').simulate('click');
    expect(wrapper2.state().clickedImg).toEqual(1);
  });
});
