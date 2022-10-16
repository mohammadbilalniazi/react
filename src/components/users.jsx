import React, { Component } from 'react';
import Counter from './counter';
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
        return (
            <div>
                <p>{this.state.username} {this.state.age} </p>
                <input type="text" name="age" onInput={(e) => this.setState({ age: e.target.value })} placeholder="age" id="age" />
                <input type="text" name="user_name" onChange={(e) => this.setState({ username: e.target.value })} placeholder="user_name" id="user_name" />
            </div>
        );
    }

}
export default User;