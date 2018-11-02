import React from 'react'; 
import {mount, shallow, render} from 'enzyme';
import Gallery from '../client/gallery';
import sampleUrls from '../data/image';
import sampleUrls2 from '../data/image2';


describe('<Gallery />', () => {
  it('should have 6 states', () => {
    const wrapper = shallow(<Gallery clickedImg={sampleUrls[2]} />); // mount/render/shallow when applicable
    const length = Object.keys(wrapper.state()).length;
    expect(length).toEqual(6);
  });

  it('should increase state n when right arrow is clicked', () => {
    const wrapper = shallow(<Gallery />); // mount/render/shallow when applicable
    expect(wrapper.state().n).toEqual(0);
    wrapper.find('#rightButton').simulate('click');
    expect(wrapper.state().n).toEqual(1);
  });

  it('should not increase state n when right arrow is at the end of slideshow', () => {

    const test = [];
    for ( let i = 0; i < 10; i += 1) {
      test.push(i);
    }

    const wrapper = shallow(<Gallery />); // mount/render/shallow when applicable
    expect(wrapper.state().n).toEqual(0);
    wrapper.find('#rightButton').simulate('click');
    expect(wrapper.state().n).toEqual(1);
    wrapper.setState(
      {
        images: test,
        n: test.length - 1,
      },
    );
    expect(wrapper.state().n).toEqual(9);
    wrapper.find('#rightButton').simulate('click');
    expect(wrapper.state().n).toEqual(9);
  });
  it('should decrease state n when left arrow is clicked', () => {
    const wrapper = shallow(<Gallery />); // mount/render/shallow when applicable
    expect(wrapper.state().n).toEqual(0);
    wrapper.setState({ n: 7 });
    expect(wrapper.state().n).toEqual(7);
    wrapper.find('#leftButton').simulate('click');
    expect(wrapper.state().n).toEqual(6);
    wrapper.find('#leftButton').simulate('click');
    expect(wrapper.state().n).toEqual(5);
  });

  it('functions should exist', () => {
    const wrapper = shallow(<Gallery />); // mount/render/shallow when applicable
    const instance = wrapper.instance();
    Object.keys(instance).forEach((key) => {
      expect(instance[key]).not.toBeFalsy();
    });
  });

  it('handleShowPhotoList should update showSlideShow state', () => {
    const wrapper = shallow(<Gallery />); // mount/render/shallow when applicable
    const oldShowSlideShow = wrapper.state().showSlideShow;
    expect(oldShowSlideShow).toBe(true);
    const { handleShowPhotoList } = wrapper.instance();
    handleShowPhotoList();
    const newShowSlideShow = wrapper.state().showSlideShow;
    expect(newShowSlideShow).toBe(false);
  });

  it('when mouse is clicked on handleShowPhotoList, it should update showSlideShow correctly', () => {
    const wrapper = shallow(<Gallery />);
    const oldShowSlideShow = wrapper.state().showSlideShow;
    expect(oldShowSlideShow).toBe(true);
    wrapper.find('#handleShowPhotoList').simulate('click');
    const newShowSlideShow = wrapper.state().showSlideShow;
    expect(newShowSlideShow).toBe(false);
  });

});
