import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
// import { Input } from 'antd';
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search.jsx';
import Am from './am/Am';
import * as IMG from '../scrollImg/Img';
import '../App.styl';

function App() {
  // const { Search } = Input;
  return (
    <Router>
      <div className="music-tab">
        <div className="tencent">
          <div className="tab-item">
            <NavLink className="nav-link" to="recommend">
              <div className="img">
                <img src={IMG.Home_Page} className="img_1" alt=""/>
              </div>
              <span>首页</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="ranking">
              <div className="img">
                <img src={IMG.Classification} className="img_1" alt=""/>
              </div>
              <span>分类</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="search">
              <div className="img i">
                <img src={IMG.Class_Schedule} className="img_1" alt=""/>
              </div>
              <span>课程表</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="am">
              <div className="img">
                <img src={IMG.My} className="img_1" alt=""/>
              </div>
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
            <Redirect from="/" to="/ranking" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
