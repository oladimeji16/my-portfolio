import React, { Component } from 'react'
import MenuItems from './MenuItems'
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    state = {clicked: false}
    
 handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})        
    }

    render() {
        return <div className='NavBar'>
        <nav className='NavBarItems'>
            <h1 className="navbar-logo">MA</h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i 
                className={
                    this.state.clicked ? 
                    'fas fa-times' : 'fas fa-bars'                }
                >
                </i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a to={item.url} className={item.cName}>{item.title}</a>
                        </li>
                    )
                })}

            </ul>
        </nav>
    </div>
    }
}

export default NavBar