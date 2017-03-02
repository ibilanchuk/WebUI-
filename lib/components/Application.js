import React, { PropTypes } from 'react'
import Menu from './Menu'
import DisplayError from './DisplayError'
import Header from './Header.js'
export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  constructor (props, context) {
    super(props, context)
  }


  render () {

    return (
      <div className="container-fluid">
        <Header/>
        <div id="wrapper">
          <Menu/>
          <div id="page-content-wrapper">
            <div id ="container-fluid">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

    )
  }
}
