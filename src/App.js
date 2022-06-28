import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import NotFound from './pages/NotFound';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';



class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Footer/>
      <CatEdit/>
      <CatIndex/>
      <CatNew/>
      <CatShow/>
      <Home/>
      <NotFound/>
      </>
    )
  }
}

export default App
