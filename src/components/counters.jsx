import React, { Component } from 'react';
import Counter from './counter';
import User from './users';
class Counters extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        counters: [
            { id: 1, value: 4, number_user: 0 },
            { id: 2, value: 4, number_user: 0 },
            { id: 3, value: 10, number_user: 0 },
            { id: 4, value: 0, number_user: 0 }
        ],
        age: 0,
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter => <Counter id={counter.id} value={counter.value} selected={true} />)}
                <User />

                {/* selected to true is default value even if we not put selected={true} */}
            </div>
        );
    }
}

export default Counters;