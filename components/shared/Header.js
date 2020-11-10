import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import BsNavLink from './BsNavLink';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color="dark" dark expand="md">
            <NavbarBrand>LOGO</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <BsNavLink href='/' title='Accueil' />
                    <BsNavLink href='/portfolio' title='Portfolio' />
                    <BsNavLink href='/blog' title='Blog' />
                    <BsNavLink href='/cv' title='CV' />
                    <BsNavLink href='/about' title='A propos' />
                </Nav>
                <NavbarText>JL@ DEV WEB</NavbarText>
            </Collapse>
        </Navbar>

    );
}


export default Header