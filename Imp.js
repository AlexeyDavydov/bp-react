import React from "react";

class Imp extends React.Component {
    render() {
        let arr = ['a', 'b'];
        return  arr.map(el => <div>{el}</div>);
    }
}

export default Imp;