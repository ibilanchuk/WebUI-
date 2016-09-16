/*eslint-disable max-len*/
import React from 'react'
import {Link} from 'react-router'
import './Progress.less'

export default class Progress extends React.Component {

  render () {

    return (
        <div className="content">
          <h1 style={{"textAlign":"center"}}>Успішність</h1>
          <div className="exploregrid">
            <Link className="exploregrid-item" to="/progress">
              <div style={{background:"#367fa9"}} className="exploregrid-item-header"/>
              <h3 className="exploregrid-item-title">Web programming</h3>
              <div className="exploregrid-item-meta">
                <span className="exploregrid-item-meta-details">2 journals</span>
              </div>
            </Link>
             <Link className="exploregrid-item" to="/progress">
              <div style={{background:"#367fa9"}} className="exploregrid-item-header"/>
              <h3 className="exploregrid-item-title">OOP</h3>
              <div className="exploregrid-item-meta">
                <span className="exploregrid-item-meta-details">2 journals</span>
              </div>
            </Link>
             <Link className="exploregrid-item" to="/progress">
              <div style={{background:"#367fa9"}} className="exploregrid-item-header"/>
              <h3 className="exploregrid-item-title">KPP</h3>
              <div className="exploregrid-item-meta">
                <span className="exploregrid-item-meta-details">2 journals</span>
              </div>
            </Link>
          </div>
        </div>

    )
  }
}
