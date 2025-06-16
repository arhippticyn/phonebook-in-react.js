import React, { Component } from "react";
import { nanoid } from 'nanoid'
import PhoneBook from "./components/PhoneBook";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";

class App extends Component {
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: ''
};


handleChangeName = e => {
  this.setState({name: e.target.value})

}

handleChangeNum = e => {
  this.setState({number: e.target.value})
}

handleFilterChange = e => {
  this.setState({filter: e.target.value})
}

handleSubmit = e => {
  e.preventDefault()
  
  const { contacts, name, number} = this.state


  if (contacts.some(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
    alert(`${name} is already in contacts`)
    return
  }

  const newContacts = {
    id: nanoid(),
    name: name,
    number: number,
  }

   this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContacts],
    name: '',
    number: ''
  }))
 
}

getFilteredContacts = () => {
  return this.state.contacts.filter(contact => (
    contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
  ))
}

deleteBtn = (id) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }))
}


  render() {
    const filteredContacts = this.getFilteredContacts()
    return (
      <div>
        <h2>PhoneBook</h2>
        <PhoneBook 
        name={this.state.name}
        number={this.state.number}  
        sub={this.handleSubmit} 
        changeN={this.handleChangeName}
        changeNum={this.handleChangeNum} />



        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter filter={this.state.filter} onFilter={this.handleFilterChange} />

        <Contacts contacts={filteredContacts} deleteBtn={this.deleteBtn} />
      </div>
    )
  }
}

export default App;
