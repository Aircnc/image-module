// setup file
import { configure, shallow, mount, render  } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test file

const wrapper = shallow(<Foo />);

