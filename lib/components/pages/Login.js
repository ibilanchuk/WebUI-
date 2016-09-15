import React, { PropTypes } from 'react'
import * as actions from '../../actions/application'

export default class Login extends React.Component {

  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { email: null, password: null }
  }

  handleInputChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { history, store } = this.context
    const { location } = this.props

    let nextPath = '/account'
    if (location.state && location.state.nextPathname)
      nextPath = location.state.nextPathname

    store.dispatch(actions.login(this.state, () => {
      // redirect to a secure page
      history.pushState({}, nextPath)
    }))
  }

  render () {
    return (

      <div className="wrapper">
        <form className="form-signin">       
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="username" placeholder="Email address" required="" />
          <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </form>
      </div>

    )
  }
}
