import React, { Component } from 'react';
import {Icon} from 'antd'
import * as IMG from '../scrollImg/Img'
import './put.styl'
class Put extends Component {
    state = {}
    render() {
        return (
            <div className="m-header2">
                <div className="m-header2__logo">
                    <span className="m-header2__logo-pic">
                        <img src={IMG.InputImg} alt="" style={{width:30,height: 30}}/>
                    </span>
                </div>
                <form className="m-header2__search">
                    <div className="m-header2__tips">
                        {/* <i ></i> */}
                        <Icon className="icon-font" type="search" />
                        <span className="m-header2__tips-word">搜索老师、机构、课堂</span>
                        <input type="text" className="m-header2__input" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Put;