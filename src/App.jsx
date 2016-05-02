import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    render() {
        return(
            <div className="container">
                <h2>Hello React!</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />,
    document.getElementById('app'));
