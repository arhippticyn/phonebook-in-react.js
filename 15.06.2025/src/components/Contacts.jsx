import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { styles } from '../styles/PhoneBook.module.css'

class Contacts extends Component {
    constructor(props) {
        super(props)
    }

    
    
    
    render() {
        const { contacts, deleteBtn } = this.props
        return (
            <div>
                <ul>
                    {contacts.map(({name, id, number}) => (
                        <li id={id}>
                            {name}: {number} <button onClick={() => deleteBtn(id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}


export default Contacts