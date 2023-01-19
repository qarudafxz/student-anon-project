import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo white.png';
import { GiHamburgerMenu } from 'react-icons/gi';

class Navbar extends Component {
    constructor() {
        super();
        this.state = { displayMenu: false };
        this.toggleDisplayMenu = this.toggleDisplayMenu.bind(this);
    }

    toggleDisplayMenu() {
        this.setState({ displayMenu: !this.state.displayMenu});
    }

    render() {
        return (
            <div>
                {
                    this.state.displayMenu ? (
                        <nav className="navbar show" style={{
                            width: '30%',
                            height: '125vh',
                            backgroundColor: '#804197',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            zIndex: 10
                        }}>
                            <GiHamburgerMenu onClick={this.toggleDisplayMenu} style={{color: '#fff', width: 50, height: 50, position: 'absolute', top: '7.5', left: '7', cursor: 'pointer'}}/>
                            <img src={Logo} style={{width: 200, height: 100, padding: '80px 0 0 30px'}}></img>

                            <ul style={{
                                fontSize: '30px',
                                listStyle: 'none',
                                padding: '20px 0 0 50px',
                            }}>
                                <li style={{paddingTop: '20px'}}><Link to="/" style={{ textDecoration: 'none', color: '#fff'}}>Home</Link></li>
                                <li style={{paddingTop: '20px'}}><Link to="/messages" style={{ textDecoration: 'none', color: '#fff'}}>Message</Link></li>
                                <li style={{paddingTop: '20px'}}><Link to="/podcast" style={{ textDecoration: 'none', color: '#fff'}}>Podcast</Link></li>
                                <li style={{paddingTop: '20px'}}><Link to="/quotes" style={{ textDecoration: 'none', color: '#fff'}}>Anon Quotes</Link></li>
                            </ul>
                        </nav>
                    ) : (
                        <GiHamburgerMenu onClick={this.toggleDisplayMenu} style={{color: '#804197' , width: 50, height: 50, cursor: 'pointer'}}/>
                    )
                }
            </div>
        );
    }
}

export default Navbar;