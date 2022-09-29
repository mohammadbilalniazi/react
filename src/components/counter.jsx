import React, { Component } from 'react';
class Counter extends Component {
    state = {//object
        count: 2, //properties
        status: 2,
        img_url: "https://picsum.photos/200",
        tags: []
    };
    style_obj = {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    }

    // constructor() {
    //     super();
    //     console.log("constructor");
    //     this.handle_increment = this.handle_increment.bind(this)
    // }
    renderTags() {
        //console.log("renderTags this=", this)
        if (this.state.tags.length === 0) return <p>No Tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    handle_increment = () => {
        // console.log("this.state.count=", this.state.count)
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        // let classes = this.get_class_name();
        return (
            <div>
                <span style={this.style_obj} className={this.get_badge_class_name()}>{this.format_count()} </span >
                <button style={this.style_obj} onClick={this.handle_increment} className='btn btn-secondary btn-sm'>Increment</button>
                {/* {this.state.tags.length === 0 && "Please Enter Tag"}
                {this.renderTags()} */}
            </div>
        );
    }
    get_badge_class_name() {
        let classes = 'badge m-s badge-';
        classes += this.state.count === 0 ? 'primary' : 'warning';
        return classes;
    }
    format_count() {
        const { count } = this.state;
        const { status } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
export default Counter;