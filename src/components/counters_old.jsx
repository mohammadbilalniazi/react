//in this the child handle increment,decrement..


import React, { Component } from 'react';
import Counter from './counter_old';
import User from './users';
class Counters extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 4 },
            { id: 3, value: 10 },
            { id: 4, value: 0 }
        ]
    }

    handle_delete = (counter_id) => {
        // console.log("delete " + counter_id)
        // this.state.counters.filter(counter => counter.id != counter_id)
        // console.log("this.state.counters.filter(counter=>counter.id!=counter_id)=", this.state.counters.filter(counter => counter.id != counter_id))
        let new_counters = this.state.counters.filter(counter => counter.id != counter_id)
        this.setState({ counters: new_counters })
    }
    handle_add = (value) => {
        var lastItem = this.state.counters[this.state.counters.length - 1]
        let cop_counter = [...this.state.counters]
        cop_counter = cop_counter.concat({ id: lastItem.id + 1, value: +value })
        console.log({ cop_counter })
        this.setState({ ...this.state, counters: cop_counter })
        console.log("this.state.counters ", this.state.counters)
    }
    handle_reset = () => {
        const new_counters = this.state.counters.map(c => { c.value = 0; return c; });
        this.setState({ counters: new_counters })
        console.log("reset")
    }
    render() {
        return (
            <div>
                <button onClick={this.handle_reset} className='btn btn-primary btn-sm' > Reset</button>
                <User onAdd={this.handle_add} />
                {this.state.counters.map(counter => <Counter onDelete={this.handle_delete} counter={counter} key={counter.id} />
                    // befroe we passed the props as id={counter.id} value={counter.value} etc 
                    //but it creates problem
                    // selected to true is default value even if we not put selected={true} 
                )}

            </div>
        );
    }
}

export default Counters;