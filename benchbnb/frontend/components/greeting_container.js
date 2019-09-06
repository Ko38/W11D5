import Greeting from './greeting';
import {connect} from 'react-redux';
import { logout } from '../actions/session_actions';

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
}

function mapStateToProps(state){
  let userId = state.session.id
  return {
    currentUser: state.entities.users[userId]
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Greeting)