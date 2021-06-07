import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import Lifecomp from './pages/Lifecomp';
import Home from "./pages/Home"
import detail from './pages/FoodsDescription'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/detail/:id" exact component={detail}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/login" exact component={Login}/>
    </BrowserRouter>
  );
}

export default App;
