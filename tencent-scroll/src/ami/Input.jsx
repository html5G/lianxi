import React, { Component } from 'react';
// import { Input } from 'antd';
import './Input.styl'

class input extends Component {
    state = {}
    Input( ) {
        console.log(888)
    }
    render() {
        return (
            <div className= "Input">
                <input placeholder="搜索老师、机构、课程" onClick={ this.Input } />
            </div>            
        )
    }
}
export default input;

