const React = require('react');
const { hydrate } = require('react-dom');
const Index = require('../Index');

hydrate(<Index data={window.__DATA__} />, document.getElementById('root'));
