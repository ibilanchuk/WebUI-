import React, {PropTypes} from 'react'
import * as actions from '../../actions/application'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {

    static propTypes = {
        location: PropTypes.object
    };

    static contextTypes = {
        store: PropTypes.any,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.state = {
            login: null,
            password: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        const {history, store} = this.context;
        evt.preventDefault();
        store.dispatch(actions.authUser(this.state));
    }

    render() {
        return (

            <div className="wrapper">
                <form className="form-signin" onChange={this.handleInputChange}>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <TextField hintText="Введіть логін" name="login"  floatingLabelText="Логін"/>
                        <TextField hintText="Введіть пароль" name="password" floatingLabelText="Пароль" type="password"/>
                    </div>
                    <br/>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <RaisedButton primary={true} onClick={this.handleSubmit} label="Ввійти"/>
                    </div>
                </form>
            </div>

        )
    }
}
