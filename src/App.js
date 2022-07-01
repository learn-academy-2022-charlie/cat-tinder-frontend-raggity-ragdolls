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




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    this.readMonster()
  }

  readMonster = () => {
    fetch("http://localhost:3000/monsters")
    .then(response => response.json())
    .then(monstersArray => this.setState({monsters: monstersArray}))
    .catch(errors => console.log("Monster read errors:", errors))
  }

  createMonster = (newMonster) => {
    fetch("http://localhost:3000/monsters", {
      body: JSON.stringify(newMonster),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readMonster())
    .catch(errors => console.log("Monster read errors:", errors))
  }

  render() {
    return (
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
            <Route path="/monsternew" render={(props) => <MonsterNew createMonster={this.createMonster}/>} />
            <Route path="/monsteredit" component={MonsterEdit} />
            <Route component={NotFound} />
          </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App
