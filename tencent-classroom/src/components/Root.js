import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

class Root extends Component {
    state = {}
    render() {
        return (
            <Provider>
                <App />
            </Provider>
        )
    }
}

export default Root;