import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light NavLinks">
            <a class="navbar-brand" href="/">Dad Jokes</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <Link to= "/" exact className="nav-link"> Home</Link>
                </li>
                <li class="nav-item">
                <Link to= "/create" exact className="nav-link">Create a Joke</Link>
                </li>
                <li class="nav-item" className="nav-link">
                <Link to= "/saved" exact>Saved Jokes</Link>
                </li>
            </ul>
            </div>
            </nav>
        )
    }
}

export default Nav
