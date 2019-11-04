import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import red from '@material-ui/core/colors/blueGrey'
import { blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    //target the palette property
    palette: {
        primary: blueGrey
    }
});

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>,

document.getElementById('root'));

serviceWorker.unregister();
