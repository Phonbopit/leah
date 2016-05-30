import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    render() {
        return(
            <div className="container">
                <h2>Hello React!</h2>
            </div>
        );
    }
}

render(<App />,
    document.getElementById('app'));
