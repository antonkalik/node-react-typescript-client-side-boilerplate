import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

console.log({ clientENV: process.env.NODE_ENV });

ReactDOM.render(<App />, document.getElementById('root'));
