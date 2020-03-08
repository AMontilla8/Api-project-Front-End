import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const cors = require("cors");

ReactDOM.render((
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  ), document.getElementById('root'));
