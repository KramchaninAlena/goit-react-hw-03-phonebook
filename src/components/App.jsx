import React, { Component } from 'react'
import Form  from './Form/Form'
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { Contact } from './Contact/Contact';
import { Filter } from './Contact/Filter/Filter';


export default class App extends Component {
  state = {
    // contacts: [
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ],
    contacts: [],
  filter: '',
  };
componentDidMount() { 
  const localData = localStorage.getItem('contacts');
  if (localData) {
    this.setState({contacts: JSON.parse(localData)})
  }
 }

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  } 
  createContacts = (dataByForm) => {
  if(this.state.contacts.find(el => el.name === dataByForm.name)){
    return alert('This contact alredy exists')
  }
  const newContact ={
    ...dataByForm, 
    id: nanoid(),
  }
  this.setState((prev) => ({
    contacts: [newContact, ...prev.contacts]
  }))
};

filterQuery = (filterValue) => {
  this.setState({ filter: filterValue });
};

handleDelete = (contactId) => [
this.setState((prev)=> ({
  contacts: prev.contacts.filter((contact) => contact.id !== contactId),
}))
]

 render() {
  const { contacts, filter } = this.state;
  const filterContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
     return (
      <>
        <Section title='Phonebook'>
        <Form createContacts={this.createContacts}/>
    </Section>
    <Section title='Contacts'>
    <Filter filterQuery={this.filterQuery}/>
    
    <Contact contacts={filterContact} handleDelete={this.handleDelete}/>
    </Section>
    </>
    
    )
  }
}




