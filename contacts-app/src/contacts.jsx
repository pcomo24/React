import React, { Component } from 'react';
import database, {User} from './firebase';

var contacts2;

//create a component called ContactList
class ContactList extends Component {
    //constructor method that gives properties to the component
    constructor(props) {
        super(props);
        var contacts = localStorage.contacts;
        contacts = JSON.parse(contacts);

        //initialize component state so that render() has something to reference
        this.state = {
            contacts: contacts,
        }
    }
    logContacts (event) {
        database.ref('contacts/' + User.user.uid)
            .on('value', function(contacts) {
                contacts2 = contacts.val();
                console.log(contacts2);
            })

    console.log(this.state);
    //on click of button reset state to updated contacts? maybe not necessary now that i initialized state
    this.setState({ contacts: this.state.contacts});
    }
    //this.props.callback();

    //left off line 31 trying to show all contact info onclick
    render () {
        return (
            <div>
                <button onClick={event => this.logContacts}>log contacts</button>
                {this.state.contacts.map((contact, index) => {
                        return (
                            <ul>
                                <li onClick={event => this.showAll}>{'name: ' + contact.name + ' city: ' + contact.city + ' state: ' + contact.state}</li>
                            </ul>
                        )
                    })}
            </div>
        )
    }
}

export default ContactList;