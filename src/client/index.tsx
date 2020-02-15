import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './App';

console.log({ clientENV: process.env.NODE_ENV });

ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, document.getElementById('root'));
