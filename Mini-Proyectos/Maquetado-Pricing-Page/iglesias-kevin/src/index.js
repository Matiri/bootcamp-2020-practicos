/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/* Pages */
import Main from '../src/pages/mainPage.js';


ReactDOM.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
