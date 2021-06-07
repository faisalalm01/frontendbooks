import React, { Component } from 'react'
import Navbars from '../components/navbar/Navbars'
import Product from '../components/product/Product'
// import Lifecomp from './Lifecomp'
import Carousel from '../components/carosel/Carousel'
import "./pages.css"

export default class Home extends Component {
    render() {
        return (
            <div className="bg">
                <Navbars></Navbars>
                <Carousel></Carousel>
                <Product ></Product>
            </div>
        )
    }

}
