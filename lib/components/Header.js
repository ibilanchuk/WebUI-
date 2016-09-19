import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'
import './Header.less'
class Header extends React.Component {

  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
          <header className="bs-docs-nav navbar navbar-static-top">
            <div className="col-xs-3 header-left">
              <Link style={{textDecoration:"none",color:"#fff"}} to ="/"><h1 style={{marginLeft:'20px'}}>IT</h1></Link>
            </div>
            <div className="col-xs-9 header-right">
              <span>Привіт, Адмін</span>

              <div className="logout"><Link to="/logout"><i className="glyphicon glyphicon-log-out"/>Вийти</Link></div>
            </div>      
          </header>
    )
  }
}

export default Header
