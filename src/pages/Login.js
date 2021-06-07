import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './pages.css'

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
          <div className="row justify-content-center">
                  <div className="col-md-8">

              <Form className='form'>
                  <h2>Login Sistem</h2>
                          <Form.Group className="form-group">
                              <label for="exampleInputEmail1">Username </label>
                               <input type="email" className="form-control" placeholder="Masukan username anda"  required/>
                          </Form.Group>
                          <Form.Group className="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" placeholder="Password" />
                          </Form.Group>
                          <div class="form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" for="exampleCheck1">Check me out</label>
                              </div>
                              <Link to="/profile">
                              <Button type="submit" class="btn btn-primary btn-lg btn-block">Submit</Button>   
                      </Link>
                      </Form>
              </div>
          </div>
      </div> 
        )
    }
}
