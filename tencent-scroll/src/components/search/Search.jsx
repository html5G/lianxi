import React, { Component } from 'react';
import Put from '../../ami/put';
// import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
class Search extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Put />
                <div className="list-wrapper">
                    <div className="duration">
                        <p className="duration-tit"></p>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Search;