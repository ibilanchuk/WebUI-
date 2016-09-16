/*eslint-disable max-len*/
import React from 'react'



export default class Home extends React.Component {

  render () {
    const linkRedux = (<a href="https://github.com/gaearon/redux"
      target="_blank">Redux</a>)
    const linkRouter = (<a href="https://github.com/rackt/react-router"
      target="_blank">React Router</a>)
    const linkIssues = (<a
      href="https://github.com/emmenko/redux-react-router-async-example/issues"
      target="_blank"></a>)
    return (
        <div className="content">
            <h1>Hello</h1>
        </div>

    )
  }
}
