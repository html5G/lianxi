import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
import Lazyload, { forceCheck } from 'react-lazyload';
import { Icon } from 'antd'
import * as IMG from '../../scrollImg/Img'
import Scroll from '../scroll/Scroll'
import './Ranking.styl'
// import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
class Ranking extends Component {
    state = {
        refreshScroll: false,
        subcat: false
    }
    // hangeCatLink = (e) => {   
    //    const subcat = this.state
    //    this.setState({
    //        subcat: true
    //    })
    // //    subcat()
    // }
    CatLink = () => {
        const { catlink } = IMG
        return (
            <>
                {
                    catlink.map((item, index) => {
                        return (
                            <div className="cat-item" onClick={this.hangeCatLink} key={index} data-index={index}>
                                <Icon type={item.url} className="icate" />
                                <div className="cat-title" >{item.name}</div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    subcat = () => {
        const {subcat} =this.state
        const { catlink } = IMG
        return (
            <>
                {
                    catlink.forEach((item, index) => {
                        console.log(index)
                        console.log('000',item.id)
                        if (index === item.id + 1) { 
                            return (
                                <li className="sub-cat">
                                    <div className="left">
                                        <a href="https://www.baidu.com"
                                            className="sub-cat-title"
                                            key={index} data-index={index}>
                                            <Icon type={item.url} />
                                            {item.datas}
                                        </a>
                                    </div>
                                    <div className="right"></div>
                                </li>
                            )
                        }
                    })
                }
            </>
         )
    }
    render() {
        const { refreshScroll } = this.state;
        return (
            <div>
                <div className="header">
                    <header className="m-header2">
                        <form action="" className="m-header2__search">
                            <div className="m-header2__tips">
                                <i className="icon-font"></i>
                                <span className="m-header2__tips-word">搜索老师、机构、课堂</span>
                                <input type="search" className="m-header2__input" />
                            </div>
                        </form>
                    </header>
                    <nav className="cat-list">
                        <div className="cat-item-wrap">
                            {this.CatLink()}
                        </div>
                    </nav>
                </div>

                <Scroll refresh={refreshScroll} onScroll={forceCheck}>
                    <div className="sub-cat-wrap">
                        {this.subcat()}
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default Ranking;