import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar,} from 'react-bootstrap';
import "./Navbars.css"


export default class Navbars extends Component {
  state = {
    jumlah : 0
  }
    render() {
        return (
            <div >
            <Navbar className="style" bg="dark" expand="lg">
              <Link to ='/'>
                <Navbar.Brand style={{color:'white'}}>BooksStore</Navbar.Brand>
              </Link>
                <Navbar.Toggle font-color="white" aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                  <Nav.Link ><Link to= "/" style={{color:'white'}}><b>Home</b></Link></Nav.Link>
                  <Nav.Link><Link to="/login" style={{color:'white'}}><b>Login</b></Link></Nav.Link>
                  <Nav.Link className="shop-cart">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            </div>
            )
        }
    }
