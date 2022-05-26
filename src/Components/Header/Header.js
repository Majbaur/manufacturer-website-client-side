import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from '../../images/logo.jpg'
import auth from './../../firebase.init';


const Header = () => 
{
    const [user] = useAuthState(auth);

    const handleSignout =() =>
    {
        signOut(auth);
        localStorage.removeItem('accessToken');
        
    }

    const dashboardLink = <Nav.Link style={{color:'black'}} as={Link} to='/dashboard'>Dash Board</Nav.Link>

    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" className='p-3' fixed='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='d-flex align-items-center brand'>
                        <img src={logo} className='me-2 h-20' alt=""  />
                        <h4 style={{color:'black'}}>Computer Parts House</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link style={{color:'black'}} as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link style={{color:'black'}} as={Link} to="/blog">Blog</Nav.Link>
                            
                            

                            {
                                user? dashboardLink : null
                            }

                            

                            {
                                user ? <button className='btn btn-link text-decoration-none text-black' onClick={handleSignout}>Logout</button> : <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;