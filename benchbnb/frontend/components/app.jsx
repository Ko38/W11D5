import React from 'react';
import GreetingContainer from './greeting_container';
import BenchIndexContainer from './bench_index_container';
import {login} from '../actions/session_actions';
import {Route, Switch} from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SearchContainer from './search_container';
import BenchFromContainer from "./bench_form_container";

window.login = login

export default function(props){
  return(
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer/>
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupFormContainer} />
        </Switch>
        {/* <Route exact path="/" component={BenchIndexContainer} /> */}
        <Route exact path="/" component={SearchContainer} />
        <ProtectedRoute exact path="/benches/new" component={BenchFromContainer} />
      </header>
    </div>
  )
}