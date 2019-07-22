import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
import Lazyload, { forceCheck } from 'react-lazyload';
import { Icon } from 'antd'
import * as IMG from '../../scrollImg/Img'
import Scroll from '../scroll/Scroll'
import './Ranking.styl'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
class Ranking extends Component {
    state = {
        refreshScroll: false,
    }
    CatLink = () => {
        const { catlink } = IMG
        return (
            <div className="cat-item-wrap">
                {
                    catlink.map((item, index) => {
                        return (
                            <div className="cat-item" key={index} data-index={index} >
                                <Icon type={item.url} className="icate" />
                                <div className="cat-title" >{item.name}</div>
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
    render() {
        const { refreshScroll } = this.state;
        return (
            <div>
                <div className="header-o">
                    <header className="m-header2-o">
                        <form action="" className="m-header2__search-o">
                            <div className="m-header2__tips-o">
                                <i className="icon-font-o"></i>
                                <span className="m-header2__tips-word-o">搜索老师、机构、课堂</span>
                                <input type="search" className="m-header2__input-o" />
                            </div>
                        </form>
                    </header>
                    <nav className="cat-list-o">
                        
                            {this.CatLink()}
                      
                    </nav>
                </div>

                <Scroll refresh={refreshScroll} onScroll={forceCheck}>
                    <div className="sub-cat-wrap">
                        {/* {this.subcat()} */}
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default Ranking;