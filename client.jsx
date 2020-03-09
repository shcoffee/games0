const React = require('react');
const ReactDom = require('react-dom');
const Component = require('./2_wordchain/WordChain');
const { hot } = require('react-hot-loader/root');

const Hot = hot(Component);

ReactDom.render(<Hot />, document.querySelector('#root'));
