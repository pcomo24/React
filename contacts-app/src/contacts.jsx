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
            contacts2: []
        }
        //run logContacts during initialization
        this.logContacts();
    }
    logContacts (event) {
        //if there is a user get the contacts from db, if not wait 100ms then run again
        if (User.user) {
            database.ref('contacts/' + User.user.uid)
            //arrow function because react did not recognize 'this', also set state(29) after changing 'contacts2' (28)
                .once('value', (givecontacts) => {
                    this.state.contacts2 = givecontacts.val();
                    this.setState({contacts2: this.state.contacts2});
                    console.log(this.state.contacts2);
                })
        } else {
            setTimeout(() => {
                this.logContacts();
            }, 100);
        }
    }

    //left off trying to show all contact info onclick of list item
    render () {
        return (
            <div>
                <button onClick={(e) => this.logContacts()}>log contacts</button>
                {this.state.contacts2.map((contact, index) => {
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