import React, {PropTypes} from 'react'
import * as actions from '../../actions/application'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {connect} from 'react-redux'
class Home extends React.Component {

  static contextTypes = {
      store: PropTypes.any,
      history: PropTypes.object.isRequired
  };

  constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(next){
    /*console.log("asdasd",next)
    if(next.user){
      this.setState({
        user:next.user
      })
    }*/
  }
  componentDidMount(){
    const {history, store} = this.context;
    store.dispatch(actions.getStudent());
  }
  handleClick(evt) {
      const {history, store} = this.context;
      evt.preventDefault();
      store.dispatch(actions.postUser());
  }
//  <RaisedButton primary={true} onClick={this.handleClick} label="Add user"/>
//<h1 style={{textAlign:"center"}}>Home</h1>
  render () {
    return (
        <div className="content">

            <div className="mainInfo" style={{fontWeight:"bold",display:"block"}}>
              <List>
                 <ListItem
                   disabled={true}
                    leftAvatar={<Avatar>A</Avatar>}
                 >
                   {this.props.user.lastName} {this.props.user.firstName} {this.props.user.middleName}
                 </ListItem>
                <ListItem  disabled={true}>Дата народження: {this.props.user.birthday}</ListItem>
                <ListItem  disabled={true}>Номер телефону: {this.props.user.phone}</ListItem>
                 </List>
            </div>
        </div>

    )
  }
}
function mapStateToProps(state) {
    return {
      user: state.user.user
    }
}
export default connect(mapStateToProps)(Home)
