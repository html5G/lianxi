import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Recommend from './components/recommend/Recommend';
import Ranking from './components/ranking/Ranking';
import Search from './components/search/Search.jsx';
import Am from './components/am/Am';
import * as IMG from './scrollImg/Img';
import './App.styl';

function App() {

  return (
    <Router>
      <div className="music-tab">
        <div className="tencent">
          <div className="tab-item">
            <NavLink className="nav-link" to="recommend">
              <div className="img">
              <img src={ IMG.Home_Page } className="img_1" />
              </div>
              <span>首页</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="ranking">
            <div className="img">
              <img src={ IMG.Classification } className="img_1"/>
              </div>
              <span>分类</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="search">
            <div className="img i">
              <img src={ IMG.Class_Schedule } className="img_1"/> 
              </div>
              <span>课程表</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="am">
            <div className="img">
              <img src={ IMG.My } className="img_1"/>
              </div>
              <span>我的</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            <Route path="/components/recommend" component={Recommend} />
            <Route path="/components/ranking/Ranking" component={Ranking} />
            <Route path="/components/search/Search" component={Search} />
            <Route path="/components/am/Am" component={Am} />
            <Redirect from="/" to="/recommend" />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
