import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

class Menu extends React.Component {

  constructor (props, context) {
    super(props, context)
  }
  showSubMenu(){
    switch(document.getElementsByClassName('dropdown')[0].className ){
      case "dropdown":  document.getElementsByClassName('dropdown')[0].className = "dropdown open"; break;
      case "dropdown open":  document.getElementsByClassName('dropdown open')[0].className = "dropdown"; break;
    }
  }
  render () {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              <li>
                <Link to='/' activeClassName="active" className="sidebar-brand">
                 <i className="glyphicon glyphicon-home"/> Головна</Link>
              </li>
              <li> <Link to='/groups' activeClassName="active" className="sidebar-brand">
                 <i className="glyphicon glyphicon-user"/> Студенти</Link>
              </li>
              <li> <Link to='/about' activeClassName="active" className="sidebar-brand">
                <i className="glyphicon glyphicon-stats"/> Статистика</Link>
              </li>
              <li className="dropdown">
                <Link activeClassName="active" to="/progress" className="dropdown-toggle" onClick={this.showSubMenu.bind(this)} data-toggle="dropdown">
                <i className="glyphicon glyphicon-list-alt"/> Успішність <span className="caret"></span></Link>
                <ul className="dropdown-menu" id="submenu" role="menu">
                  <li><Link to="/progress">KN-306</Link></li>
                  <li><Link to="/progress">KN-126</Link></li>
                  <li><Link to="/progress">KN-553</Link></li>
                  <li><Link to="/progress">KN-205</Link></li>
                  <li><Link to="/progress">KN-324</Link></li>
                </ul>
              </li>  
            </ul>
        </div>
    )
  }
}

export default Menu
