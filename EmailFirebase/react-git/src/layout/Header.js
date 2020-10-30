import React, { useState, useContext, Fragment } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";

import { Link } from "react-router-dom";

import { userContext } from "../context/userContent";
import firebase from 'firebase/app'

const Header = () => {
    const context = useContext(userContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const Signout = () => {
        firebase.auth().signOut()
        context.setUser(null)
    }

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    LCO gitfire app
        </Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {context.user && context.user.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {context.user ? (
                        <NavItem>
                            <NavLink tag={Link} to="/Signin" onClick={Signout} className="text-white">
                                Logout
                            </NavLink>
                        </NavItem>
                    ) : (
                            <Fragment>
                                <NavItem>
                                    <NavLink tag={Link} to="/Signup" className="text-white">
                                        Signup
                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Signin" className="text-white">
                                        Signin
                </NavLink>
                                </NavItem>
                            </Fragment>
                        )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
