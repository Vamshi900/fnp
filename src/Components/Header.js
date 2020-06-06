import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <Link to="/" className="font-bold">
                FNP
            </Link>
            <Navigation />
            <span className="font-bold">
                <img src="https://i7.fnp.com/assets/images/new-fnplogo.png" />
            </span>

        </header>
    )
}

export default Header