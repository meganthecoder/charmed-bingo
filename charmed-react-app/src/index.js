import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BingoCard from './BingoCard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BingoCard />, document.getElementById('container'));
registerServiceWorker();
