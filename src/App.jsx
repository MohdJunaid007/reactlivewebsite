
// shortcut - rafce 
import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import New from './New'
import Footer from './Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Redirect, Route, Switch} from "react-router-dom"
//replace Switch with Routes

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route  exact  path='/about' component={About}/>
       <Route  exact path='/service' component={Service}/> 
      <Route  exact path='/contact' component={Contact}/>
      <Route  exact path='/new' component={New}/>
      <Route  exact path='/' component={Home}/>
      <Redirect to='/'/>
    </Switch>

<Footer/>
      
    </>
  )
}

export default App
