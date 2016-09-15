import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'
import MenuListItem from './MenuListItem'


const menuItems = [
  { text: 'Home', link: '/', icon: 'fa fa-star' },
  { text: 'Account', link: '/login', icon: 'fa fa-user' },
  { text: 'About', link: '/about', icon: 'fa fa-dot-circle-o' },
  { text: 'Fork Me', link: '/abs', icon: 'fa fa-github'}
]

class Menu extends React.Component {

  constructor (props, context) {
    super(props, context)
  }

  render () {

    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
             {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
            </ul>
        </div>
    )
  }
}

export default Menu
