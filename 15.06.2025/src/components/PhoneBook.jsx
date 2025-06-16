import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { styles } from '../styles/PhoneBook.module.css'

class PhoneBook extends Component {
    constructor(props) {
        super(props)
    }


    
    
    render() {
        const { name, number, sub, changeN, changeNum } = this.props
        return (
            <div>

            <form action="" onSubmit={sub}>
                <label htmlFor="name">Name</label>
                <input
                onChange={changeN}
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <label htmlFor="number">Number</label>
                <input
                   onChange={changeNum}
                   type="tel"
                   name="number"
                   value={number}
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                />
                <button type="submit">Add contact</button>
            </form>  
            </div>

        )
    }
}


export default PhoneBook