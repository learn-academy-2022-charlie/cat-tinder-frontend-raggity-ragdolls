import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import NotFound from './pages/NotFound';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import mockCats from './mockCats.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: mockCats
    }
  }
  
  render() {
    return (
      <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catshow" component={CatShow} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catedit" component={CatEdit} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer/>
      </>
    )
  }
}

export default App
