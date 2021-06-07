import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import "./Carosel.css"

export default class Carosel extends Component {
    render() {
        return (
            <div>
               <Carousel className='banner'>
  <Carousel.Item interval={500}>
    <img alt="Carosel"
      style={{height:'400px'}}
      className="d-block w-100"
      src="bukubanner1.jpg"/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>dasadasdadasdadadasdasdad</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="corosel 2"
      style={{height:'400px'}}
      className="d-block w-100"
      src="bukubanner2.png"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
            </div>
        )
    }
}
