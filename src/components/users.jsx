import React, { Component } from 'react';
import Counter from './counter_old';
class User extends Component {
    state = {//object
        username: "bi",
        father_name: "Hashim",
        age: 60,

    };
    style_obj = {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
    }

    handle_form = user => {
        this.setState({ username: user })
    }


    render() {
        // console.log("this.props ", this.props)
        return (
            <div>
                <p>{this.state.username} {this.state.age} </p>
                <input type="text" name="age" onChange={(e) => this.props.onAdd(e.target.value)} placeholder="age" id="age" />
                <input type="text" name="user_name" onChange={(e) => this.setState({ username: e.target.value })} placeholder="user_name" id="user_name" />
            </div>
        );
    }

}
export default User;