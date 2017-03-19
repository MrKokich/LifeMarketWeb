import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
    render() {
        return (
            <div className='App'>
                {this.props.children}
            </div>
        );
    }
});

export default App;