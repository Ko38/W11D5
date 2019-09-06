import React from 'react';
import {Link} from 'react-router-dom';
import { RECEIVE_BENCHES, receiveBenches, fetchBenches } from "../actions/bench_actions";

export default function Gretting({ currentUser, logout}){
  return (
    <div>
      {
        currentUser ? 
        (<div>
          Welcome {currentUser.username} 
          <button onClick={logout}>logout</button>
        </div>) : 
        (<div>
            <Link to="/signup">signup</Link>
            <Link to="/login">login</Link>
        </div>)
      }
    </div>
  )
}