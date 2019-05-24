import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from "./Store/Store";
import {Provider} from "react-redux"

ReactDOM.render(<Provider store = {Store} ><App /></Provider>, document.getElementById('root') as HTMLElement);
