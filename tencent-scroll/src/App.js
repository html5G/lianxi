import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Recommend from './components/recommend/Recommend';
import Ranking from './components/ranking/Ranking';
import Search from './components/search/Search.jsx';
import Am from './components/am/Am';
import './App.styl';

function App() {
  return (
    <Router>
      <div className="music-tab">
        <div className="tab-item">
          <NavLink className="nav-link" >
            <span>首页</span>
          </NavLink>
        </div>
        <div className="tab-item">
          <NavLink className="nav-link" >
            <span>分类</span>
          </NavLink>
        </div>
        <div className="tab-item">
          <NavLink className="nav-link" >
            <span>课程表</span>
          </NavLink>
        </div>
        <div className="tab-item">
          <NavLink className="nav-link" >
            <span>我的</span>
          </NavLink>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            <Route path="/components/recommend/Recommend" component={Recommend} />
            <Route path="/components/ranking/Ranking" component={Ranking} />
            <Route path="/components/search/Search" component={Search} />
            <Route path="/components/am/Am" component={Am} />
            {/* <Route path="/" component={Recommend} /> */}
            <Redirect from="/" to="/recommend" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
