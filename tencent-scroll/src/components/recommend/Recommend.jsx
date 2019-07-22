import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import * as IMG from '../../scrollImg/Img'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
import Lazyload, { forceCheck } from 'react-lazyload';
import Scroll from '../scroll/Scroll'
import Put from '../../ami/put'
// import TABER from '../../ami/API'
import './Recommend.styl'
class Recommend extends Component {

    state = {
        albumList: [],
        refreshScroll: false,
        TABERX: []
    }
    componentDidMount() {
        new Swiper('.slider-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            loop: true,
            pagination: { el: '.swiper-pagination' },
        })
        // this.setState({
        //     refreshScroll: true
        // })
    }
    renderSwiperItem = () => {
        const { XhImg } = IMG
        return (
            <>
                {XhImg.map((item, index) => {
                    return (
                        <div className="swiper-slide" data-index={index} key={index}>
                            <a href={IMG.scrollRef} className="slider-nav">
                                <img src={item} width="100%" height="100%" alt="" />
                            </a>
                        </div>
                    )
                })}
            </>
        )
    }
    renderAlbum = () => {
        const { createAlbumByItem } = IMG;
        return (
            <>
                {
                    createAlbumByItem.map((item, index) => {
                        return (
                            < li className="common__course-item" data-index={index} key={index} >
                                <a href={`https://ke.qq.com/course/${item.id}`} className="common__course-link">
                                    <div className="common__course-cover-wrap">
                                        <img src={item.url} alt="" className="common__course-cover" />
                                    </div>
                                    <h3 className="common__course-title">{item.Header}</h3>
                                    <p className="common__course-price">{item.name}</p>
                                </a>
                            </li >
                        )
                    })
                }
            </>
        )
    }
    topic = () => {
        const { TABER } = IMG
        return (
            <>
                {
                    TABER.map((item, index) => {

                        return (
                            <div className="topic-seo-mod" key={index} >
                                <h2 className="common-title">{item.HTo}</h2>
                                <div className="tab">
                                    <div className="tab-bar">
                                        <div className="tab-bar-item" onClick={this.Taber}>{item.name}</div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    Taber = () => {
        // console.log('8888')
        const { TABER } = IMG
        
        return (
            <>
                {
                    TABER.map((item, index) => {
                        console.log('8888', TABER)
                        return (
                            <div className="tab-content">
                                <div className="tab-contet-item">
                                    <a href="https://www.baidu.com">{item.scrollItem}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    render() {
        const { refreshScroll } = this.state;
        return (
            <div className="Recommend">
                <Put />
                <div className="scroll">
                    <Scroll refresh={refreshScroll} onScroll={forceCheck}>
                        <div>
                            <div className="slider-container">
                                <div className="swiper-wrapper">
                                    {this.renderSwiperItem()}
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>

                            <div className="Gift-scroll">
                                {/* <div className="Gift"> */}
                                <div className="Gift" onClick={this.gety}>
                                    <img src={IMG.Giftsrcoll} style={{ width: 180, height: 70 }} alt="" />
                                </div>
                                {/* </div> */}
                                <div className="Gift">
                                    <a href={IMG.scrollRef}>
                                        <img src={IMG.scroll} style={{ width: 180, height: 70 }} alt="" />
                                    </a>
                                </div>
                            </div>

                            <ul className="zhibo">
                                <li className="zhibo_1">
                                    <div className="zhibo-img">
                                        <div className="zhibo-img-1">
                                            <img src={IMG.zhiboImg} alt="" style={{ width: 175, height: 98 }} />
                                        </div>
                                    </div>
                                    <div className="zhibo-right">
                                        <h3 className="zhibo-biaoqian">
                                            3种自媒体核心玩法，2小时独家揭秘
                            </h3>
                                        <p className="zhibo-name">
                                            佳佳
                            </p>
                                        <p className="zhibo-zb">
                                            <span className="zhibo-zb-i">
                                                <i className="zhibo-i"></i>
                                                直播中
                                </span>
                                            112人在上课
                           </p>
                                    </div>
                                </li>
                                <li className="zhibo_1">
                                    <div className="zhibo-img">
                                        <div className="zhibo-img-1">
                                            <img src={IMG.zhiboImg} alt="" style={{ width: 175, height: 98 }} />
                                        </div>
                                    </div>
                                    <div className="zhibo-right">
                                        <h3 className="zhibo-biaoqian">
                                            3种自媒体核心玩法，2小时独家揭秘
                            </h3>
                                        <p className="zhibo-name">
                                            佳佳
                            </p>
                                        <p className="zhibo-zb">
                                            <span className="zhibo-zb-i">
                                                <i className="zhibo-i"></i>
                                                直播中
                                </span>
                                            112人在上课
                           </p>
                                    </div>
                                </li>
                                <li className="zhibo_1">
                                    <div className="zhibo-img">
                                        <div className="zhibo-img-1">
                                            <img src={IMG.zhiboImg} alt="" style={{ width: 175, height: 98 }} />
                                        </div>
                                    </div>
                                    <div className="zhibo-right">
                                        <h3 className="zhibo-biaoqian">
                                            3种自媒体核心玩法，2小时独家揭秘
                            </h3>
                                        <p className="zhibo-name">
                                            佳佳
                            </p>
                                        <p className="zhibo-zb">
                                            <span className="zhibo-zb-i">
                                                <i className="zhibo-i"></i>
                                                直播中
                                </span>
                                            112人在上课
                           </p>
                                    </div>
                                </li>

                            </ul>
                            <div className="custom">
                                <div className="custom_mod">
                                    <h2 className="custom-title">热门推荐</h2>
                                    <ul className="common__course-list">
                                        {this.renderAlbum()}
                                    </ul>
                                </div>
                            </div>
                            <div className="custom">
                                <div className="custom_mod">
                                    <h2 className="custom-title custom-title-h">产品策划&产品运营</h2>
                                    <ul className="common__course-list">
                                        {this.renderAlbum()}
                                    </ul>
                                </div>
                            </div>

                            <div className="more">
                                <a className="more-link" href="https://m.ke.qq.com/courseList.html?_bid=167&_wv=2147484673#form=index"
                                    style={{
                                        display: "block", textAlign: "center",
                                        borderRadius: 10, height: 45, fontSize: 14, color: "#bbbbbb",
                                    }}
                                >查看全部课程</a>
                            </div>

                            <div className="topic-seo">
                                {this.topic()}

                            </div>

                            <div className="underside"></div>
                        </div>
                    </Scroll>
                </div>

            </div>
        );
    }
}

export default Recommend;