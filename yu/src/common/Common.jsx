import React, { Component } from 'react';
import XhIm from '../api/index';
import Swiper from 'swiper'
class Common extends Component {
    state = {}
    componentDidMount() {
        var swiper = new Swiper('.slider-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            loop: true,
            pagination: { el: '.swiper-pagination' },
        })
    }
    renderSwiperItem()  {
        const { XhImg } = XhIm
        return (
            <>
                {XhImg.map((item, index) => {
                    return (
                        <div className="swiper-slide" key={index}>
                            {/* <a href={IMG.scrollRef} className="slider-nav"> */}
                            <img src={item} width="100%" height="100px" alt="" />
                            {/* </a> */}
                        </div>
                    )
                })}
            </>
        )
    }
    render() {
        return (
            <>
            <div className="slider-container">
                    <div className="swiper-wrapper">
                        {this.renderSwiperItem()}
                    </div>
                    <div className="swiper-pagination"></div>
            </div>
            </>
        )
    }
}
export default Common;