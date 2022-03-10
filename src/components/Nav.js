import React from 'react';
import { Link } from 'react-router-dom'

function Nav () {
    const navStyle = {
        color: 'orange'
    };
    return (
        <>
            <nav>
                <h2>Logo</h2>
                <ul className='nav-links'></ul>
                <Link to="/">Home</Link>
                <Link to="allergies">Your Allergies</Link>
                <Link to="restaurants">Favorite Restaurants</Link>
                <Link to="meals">Favorite Meals</Link>
            </nav>
            </>
);
}

export default Nav;