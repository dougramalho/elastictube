import ReactDOM from 'react-dom';
import React from 'react';

import store from './state.js';

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

const renderApp = () => {
  ReactDOM.render(<HelloWorld />, document.getElementById('app'));
};


renderApp();