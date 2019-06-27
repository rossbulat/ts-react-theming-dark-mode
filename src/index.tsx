import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeManager } from './ThemeManager';

ReactDOM.render(
  <ThemeManager>
    <App />
  </ThemeManager>
  , document.getElementById('root'));


serviceWorker.unregister();
