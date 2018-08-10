import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App tilte="Relevent Persons"/>, document.getElementById('root'));
registerServiceWorker();
