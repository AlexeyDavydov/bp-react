import React from "react";
import ReactDOM from "react-dom";
import Imp from './Imp';

let rootContainer = document.getElementById('root');

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>React App</div>
                <Imp />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, rootContainer);