import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import Spinner from './components/Spinner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <>
        <Navbar title="FactShala" />
        <Switch>
          <Route exact path="/">
            <News key="business" pageSize={20} country="in" category="business" />
          </Route>
          <Route exact path="/business">
            <News key="business1" pageSize={20} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={20} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News key="general" pageSize={20} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={20} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={20} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={5} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={5} country="in" category="technology" />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
export default App