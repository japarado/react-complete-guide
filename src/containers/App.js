import React, { Component } from 'react'

import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor (props) {
    super(props)
    console.log('[App.js] Inside constructor')
    this.state = {
      persons: [
        { id: 'asasdf', name: 'Max', age: 28 },
        { id: 'safsdaf', name: 'Manu', age: 29 },
        { id: 'xvbcxnbvmbn', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount () {
    console.log('[App.js] inside componentWillMount')
  }

  componentDidMount () {
    console.log('[App.js] Inside componentDidMount')
  }

  /* state = {
    persons: [
      { id: 'asasdf', name: 'Max', age: 28 },
      { id: 'safsdaf', name: 'Manu', age: 29 },
      { id: 'xvbcxnbvmbn', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
	} */

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons

    this.setState({ showPersons: !doesShow })
  }

  render () {
    console.log('[App.js] inside render()')
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
