import './App.css'
import { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        { name: 'Linda', id: '0' },
        { name: 'Rita', id: '1' },
        { name: 'Shane', id: '3' },
        { name: 'Rina', id: '4' },
      ],
      // monster1: {
      //   name: 'Linda',
      // },
      // monster2: {
      //   name: 'Rita',
      // },
      // monster3: {
      //   name: 'Shane',
      // },
    }
  }
  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    )
  }
}

export default App
