import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import props from './data.json';

ReactDOM.render(<App {...props}/>, document.getElementById('root'));
registerServiceWorker();
