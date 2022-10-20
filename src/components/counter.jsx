//in this the parent handle increment,decrement.. 
// the local state is deleted only rely on props which receives data
import React, { Component } from 'react';
class Counter extends Component {

    style_obj = {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    }

    renderTags() {
        console.log("renderTags this=", this)
        if (this.state.tags.length === 0) return <p>No Tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        // let classes = this.get_class_name();
        console.log("this.props=", this.props)
        return (
            <div>
                {this.props.children}
                <span style={this.style_obj} className={this.get_badge_class_name()}>{this.format_count()} </span >

                <button style={this.style_obj} onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button style={this.style_obj} onClick={() => this.props.onDecrement(this.props.counter)}>Decrement</button>
                <button style={this.style_obj} onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>Delete</button>

                {/* {this.state.tags.length === 0 && "Please Enter Tag"}
                {this.renderTags()} */}
            </div>
        );
    }
    get_badge_class_name() {
        let classes = 'badge m-s badge-';
        classes += this.props.counter.value === 0 ? 'primary' : 'warning';
        return classes;
    }
    format_count() {
        console.log(" format_count this.props.counter.value=", this.props.counter.value)
        const { value } = this.props.counter;
        const { id } = this.props.counter;
        console.log("id=", id)
        return value === 0 ? 'Zero' : value;
    }
}
export default Counter;