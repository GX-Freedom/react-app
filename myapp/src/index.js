import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

helmet()
cookieParser()
bodyParser.json()
bodyParser.urlencoded({ extended: true })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
