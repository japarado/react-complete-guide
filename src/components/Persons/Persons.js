import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
  constructor (props) {
    super(props)
    console.log('[Persons.js] inside constructor')
  }

  componentWillMount () {
    console.log('[Persons.js] inside componentWillMount')
  }

  componentDidMount () {
    console.log('[Persons.js] inside componentDidMount')
  }

  render () {
    console.log('[Persons.js] inside render')
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.age}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person)}
        />
      )
    })
  }
}

export default Persons
