import '../assets/stylesheets/index.less'
require('bootstrap/less/bootstrap.less')

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Root, {store} from './Root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(

<MuiThemeProvider>
    <Provider store={store}>
        <Root/>
    </Provider>
</MuiThemeProvider>, document.getElementById('app'))
