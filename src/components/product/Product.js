import React, { Component } from 'react'
import { Card,Button, CardDeck,} from 'react-bootstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./Product.css"

export default class Product extends Component {
    state={
        foods: [],
    }
     
      componentDidMount(){
          axios.get("https://backendbooks.herokuapp.com/books/").then((res)=>{
              console.log(res.data.data);
              this.setState({
                  foods:(res.data.data)
              })
          })
      }

    render() {
        const {foods} = this.state
        return (
            <div >
               <div className="produk">
            <CardDeck >
            {foods.map((foods,index)=>{return(
                <Card className="row" style={{ width: '18rem' }} key={index}>
            <Card.Body>
            <Card.Img variant="top" src= {this.state.img} />
                <Card.Title>
                    {this.props.title}
                    {foods.buku}
                    </Card.Title>
                <Card.Text>
                    {this.props.text}
                    {foods.harga}
                </Card.Text>
                <Card.Text>{foods.kategori}</Card.Text>
                <Link to={`/detail/${foods.id}`}>
                    <Button variant="dark">detail</Button>
                    </Link>
            </Card.Body>
            </Card> 
            )})}         
            </CardDeck>
           
            </div>
            </div>
        )
    }
        }
    
