import React, { PropTypes } from 'react'
import Menu from './Menu'
import DisplayError from './DisplayError'

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  constructor (props, context) {
    super(props, context)
  }


  render () {

    return (
      <div>
          <header className="bs-docs-nav navbar navbar-static-top">
            <h1 style={{marginLeft:'20px'}}>IT</h1>
          </header>
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
