import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import MonsterEdit from './pages/MonsterEdit';
import MonsterIndex from './pages/MonsterIndex';
import NotFound from './pages/NotFound';
import MonsterNew from './pages/MonsterNew';
import MonsterShow from './pages/MonsterShow';
import Home from './pages/Home';
import mockMonsters from './mockMonsters.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: mockMonsters
    }
  }
  
  render() {
    return (
      <>
      
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/monsterindex" render={(props)=> <MonsterIndex monsters={this.state.monsters}/>} />
            <Route path="/monstershow/:id" render= {(props) => {
              let id = props.match.params.id
              let monster = this.state.monsters.find((monsterObject)=> monsterObject.id == id)
              return <MonsterShow monster={monster}/>
            }} />
            <Route path="/monsternew" component={MonsterNew} />
            <Route path="/monsteredit" component={MonsterEdit} />
            <Route component={NotFound} />
          </Switch>
        <Footer/>
      </Router>
      
      </>
    )
  }
}

export default App
