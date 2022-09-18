import React, { Component } from 'react';

class Counter extends Component {
    state = {//object
        count: 2, //properties
        status: 2,
        img_url: "https://picsum.photos/200"
    };

    style_obj = {
        fontSize: 15,
        fontWeight: 'bold'
    }
    render() {
        // let classes = this.get_class_name();
        return (<div><span style={this.style_obj} className={this.get_class_name()}>{this.formatCount()} </span > <button className='btn btn-secondary btn-sm'>Increment</button></div>);
    }

    get_class_name() {
        let classes = 'badge m-s badge-';
        classes += this.state.count === 0 ? 'primary' : 'warning';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        const { status } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}


export default Counter;