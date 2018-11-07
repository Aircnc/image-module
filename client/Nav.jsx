import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'semantic-ui-react';


const Nav = () => (
  <div className="nav-container">
    <div id="logo">
      <img id="logoImg" alt="" src="https://1ststepaccounting.com/wp-content/uploads/2017/07/airbnb-logo.png" />
    </div>

    <Input id="search-bar" size="big" icon="search" iconPosition="left" placeholder="Search" />
    
    <div id="list1" className="rectangle">Start hosting</div>
    <div id="list2" className="rectangle">Saved</div>
    <div id="list3" className="rectangle">Trips</div>
    <div id="list4" className="rectangle">Messages</div>
    <div id="list5" className="rectangle">Help</div>
    <div className="rectangle" id="list6">
      <div className="circle" />
    </div>
  </div>
);

export default Nav;

ReactDOM.render(<Nav />, document.getElementById('nav-bar'));
