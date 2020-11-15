import Link from 'next/link';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import BsNavLink from './BsNavLink';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className='port-navbar port-default absolute' color="transparent" dark expand="md">
            <Link href='/'>
                <a className="port-navbar-brand navbar-brand">JL@ DEV WEB</a>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <BsNavLink href='/' title='Accueil' />
                    <BsNavLink href='/portfolio' title='Portfolio' />
                    <BsNavLink href='/blog' title='Blog' />
                    <BsNavLink href='/cv' title='CV' />
                    <BsNavLink href='/about' title='A propos' />
                </Nav>
                <Nav navbar>
                    <NavItem className='port-navbar-item'>
                        <BsNavLink href='/api/v1/login' title='Login' />
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    );
}


export default Header