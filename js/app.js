var React = require('react');
var Render = require('react-dom').render;
var ProductData = require('./ProductData');
var FluxCartApp = require('./components/FluxCartApp.react.js');


ProductData.init();


Render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);
