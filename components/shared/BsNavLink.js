import React from 'react'
import Link from 'next/link'
import {
    NavItem
} from 'reactstrap';

const BsNavLink = ({ title, href }) => {
    return (
        <NavItem className='port-navbar-item'>
            <Link href={href}>
                <a className="nav-link port-navbar-link">
                    {title}
                </a>
            </Link>
        </NavItem>
    )
}

export default BsNavLink
