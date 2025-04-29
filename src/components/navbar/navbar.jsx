import { Navbar, Container, Nav } from "react-bootstrap";
import './navbar.css'
import { useSelector, useDispatch } from "react-redux";
import {login, logout} from '../../redux/userslice'
import { useNavigate } from "react-router-dom";
import { use } from "react";

function NavigationBar(){
    const isloggedin = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    
    return(
        <Navbar bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    Ticket Management System
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    {!isloggedin &&
                        <Nav.Item>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav.Item>
                    }
                    {!isloggedin &&
                        <Nav.Item>
                            <Nav.Link href="/Login">Login</Nav.Link>
                        </Nav.Item>
                    }
                    {
                        isloggedin && 
                        <Nav.Item>
                            <Nav.Link href="/mylists">My Lists</Nav.Link>
                        </Nav.Item>
                    }
                    {
                        isloggedin && 
                        <Nav.Item>
                            <Nav.Link href="/cases">Cases</Nav.Link>
                        </Nav.Item>
                    }
                    {
                        isloggedin && 
                        <Nav.Item>
                            <Nav.Link href="/support">Support</Nav.Link>
                        </Nav.Item>
                    }
                    {
                        isloggedin && 
                        <Nav.Item>
                            <Nav.Link href="/notification">Notification</Nav.Link>
                        </Nav.Item>
                    }
                    {
                        isloggedin && 
                        <Nav.Item>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </Nav.Item>
                    }
                </Nav>
            </Container>
        </Navbar>
        
    )
}

export default NavigationBar;