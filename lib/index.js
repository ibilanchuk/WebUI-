import '../assets/stylesheets/index.less'
require('bootstrap/less/bootstrap.less')
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root, { store } from './Root'

ReactDOM.render(
	<Provider store={store}>
	  <Root />
	</Provider>
	, document.getElementById('app')
)

