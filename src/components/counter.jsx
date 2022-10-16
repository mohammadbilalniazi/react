import React, { Component } from 'react';
class Counter extends Component {
    state = {//object
        count: this.props.value, //properties  prev    count: 2, //properties
        value: 3,
        status: 2,
        img_url: "https://picsum.photos/200",
        tags: [],
        is_active: false,
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
        console.log("renderTags this=", this)
        if (this.state.tags.length === 0) return <p>No Tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    handle_increment = () => {
        // console.log("this.state.count=", this.state.count)
        this.setState({ count: this.state.count + 1 })
    }
    handle_decrement = product => {
        console.log(product)
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        // let classes = this.get_class_name();
        console.log("this.props=", this.props)
        return (
            <div>
                {this.props.children}
                <span style={this.style_obj} className={this.get_badge_class_name()}>{this.format_count()} </span >

                <button style={this.style_obj} onClick={this.handle_increment} className='btn btn-secondary btn-sm'>Increment</button>
                <button style={this.style_obj} onClick={() => this.handle_decrement(2)}>Decrement</button>
                <button style={this.style_obj} className='btn btn-danger btn-sm'>Delete</button>

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