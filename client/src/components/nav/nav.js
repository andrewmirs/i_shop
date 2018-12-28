import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
    state = {
        common: [
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'Shop',
                to: '/products'
            }
        ],
        auth: [
            {
                text: 'Orders',
                to: '/account/orders'
            },
            {
                text: 'Profile',
                to: '/account'
            }
        ],
        nonAuth: [
            {
                text: 'Sign In',
                to: '/account/sign_in'
            },
            {
                text: 'Sign Up',
                to: '/account/sign_up'
            }
        ]
    }

    renderSignOut(){
       return <button className="btn wave-effect waves-light blue" onClick={() => console.log('Sign Out Clicked')}>Sign Out</button>
    }

    buildLink(link){
        return (
            <li key={link.to} >
                <Link to={link.to}>{link.text}</Link> 
            </li>
        );
    }

    renderLinks(){
        const auth = true;
        let authLinks = [];

        const { auth: navAuth, common, nonAuth } = this.state

        const commonLinks = common.map(this.buildLink);

        if(auth){
            authLinks = navAuth.map(this.buildLink);
            authLinks.push(<li key="/sign-out">{this.renderSignOut()}</li>);
        } else {
            authLinks = nonAuth.map(this.buildLink);
        }

        console.log(authLinks);

        return [...commonLinks, ...authLinks];
    }

    render() { 
        return ( 
            <nav className="blue-grey darken-2">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">iShop</Link>

                    <ul className="right">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Nav;
