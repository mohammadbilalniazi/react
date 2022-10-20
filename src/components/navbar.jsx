import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (<nav style={{ marigin: '5%' }} className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
            </div>
        </nav>)
    }
}

export default NavBar;
