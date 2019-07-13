import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search.jsx';
import Am from './am/Am';

// import '../assets/stylus/font.styl';
// import '../assets/stylus/reset.styl';
// import './App.styl';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          header
        </header>
        <div className="music-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/recommend">
              <span>首页</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/ranking">
              <span>分类</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/search">
              <span>课程表</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/am">
              <span>我的</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/search" component={Search} />
            <Route path="/am" component={Am} />
            {/* <Route path="/" component={Recommend} /> */}
            <Redirect from="/" to="/recommend" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
