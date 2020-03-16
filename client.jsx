import React from 'react';
import ReactDom from 'react-dom';
import Component from './3_numberbaseball/NumberBaseballClass';
import { hot } from 'react-hot-loader/root';

const Hot = hot(Component);

ReactDom.render(<Hot />, document.querySelector('#root'));
