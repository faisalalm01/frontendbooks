import React, { Component } from 'react'
import {Card, Button, Navbar, Nav, CardDeck} from 'react-bootstrap'
import axios from 'axios'  
// import Navbars from '../components/navbar/Navbars';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './pages.css'

export default class FoodsDescription extends Component {
    state={
        foods:[],
        jumlah: 0
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
       axios.get("http://backendbooks.herokuapp.com/books/"+id).then((res)=>{
         console.log(res.data.data);
         this.setState({
           foods:(res.data.data)
         })
       })
    }
    
    handlePlus = ()=> {
    
      this.setState ({
        jumlah : this.state.jumlah + 1,
      })
    }
    handleMinus = ()=> {
      if (this.state.jumlah > 0)
      this.setState ({
        jumlah : this.state.jumlah - 1,
      })
    }
    handleChange = () => {}
    render() {
        const { foods } = this.state;
        return (
            <div>
             
            <Navbar className="style" bg="dark" expand="lg">
              <Link to ='/'>
                <Navbar.Brand style={{color:'white'}}>BooksStore</Navbar.Brand>
              </Link>
                <Navbar.Toggle font-color="white" aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                  <Nav.Link ><Link to= "/" style={{color:'white'}}><b>Home</b></Link></Nav.Link>
                  <Nav.Link ><Link to="/profile" style={{color:'white'}}><b>Profile</b></Link></Nav.Link>
                  <Nav.Link className="shop-cart">
                  <span>{this.state.jumlah}</span>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          <CardDeck className="detail">
              <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src= {this.props.img} />
            <Card.Body>
                <Card.Title>
                    {/* {this.props.title} */}
                    {foods.menu}
                </Card.Title>
                <Card.Text>
                    {/* {this.props.text} */}
                    {foods.harga}
                </Card.Text>
                <Card.Text>{foods.kategori}</Card.Text>
                <Button variant="danger" onClick= {this.handleMinus}>-</Button>
                <input onChange={this.handleChange} type="text" value= {this.state.jumlah} className="text-center" style={{width: "70%"}}/>
                <Button variant="primary" onClick={this.handlePlus}>+</Button>
            </Card.Body>
            </Card>
            </CardDeck>
            </div>
        )
    }
}
