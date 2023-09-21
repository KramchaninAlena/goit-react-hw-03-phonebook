import css from '../Form/Form.module.css'
import React, { Component } from 'react'

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class Form extends Component {
state = INITIAL_STATE


handleChange = ({target:{value, name}}) => {
  this.setState({
    [name]: value,
    })
};

onSubmit = (evt) => {
  evt.preventDefault();
  console.log(this.state)
  this.props.createContacts(this.state)
  this.setState(INITIAL_STATE )
}

  render() {
    return (
      <form className={css.form} onSubmit={this.onSubmit}>
          <label htmlFor="InputName" className={css.formLabel}>Name</label>
          <input onChange={this.handleChange}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={this.state.name}
      className={css.formInput}
    />
    <label htmlFor="Inputnumber" className={css.formLabel}>Number</label>
    <input onChange={this.handleChange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={this.state.number}
  className={css.formInput}
/>
    <button className={css.formBtn}>Add Contact</button>
      </form>
  )
  }
}



