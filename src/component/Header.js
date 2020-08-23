import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid grad">
                <div className="container p-3">
                    <div className="m-0 h4 text-light">
                        <img  src={require('./icon.png')} className="navicon mr-3" alt="logo" />
                        CV19 INDIA
                    </div>
                </div>
            </div>
        )
    }
}
