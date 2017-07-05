import React, { Component } from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import database, {User} from './firebase';
import './contact.css';


function compare(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
};

//create AddContact component
class AddContact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        };

    }



    handleSubmit (event) {
        console.log(this.state.name);
        var contacts = localStorage.contacts || '[]';
        contacts = JSON.parse(contacts);
        contacts.push(this.state);
        contacts.sort(compare);
        database.ref('contacts/' + User.user.uid).set(contacts);
        localStorage.contacts = JSON.stringify(contacts);
        event.preventDefault();
    }


    update_state (event, key) {
        this.setState({[key]: event.target.value});
    }



    render () {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <Card className="contact-card">
                        <CardTitle title ="Create Contact"/>
                        <CardText>
                            <TextField floatingLabelText="name" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'name')}/>
                            <br></br>
                            <TextField floatingLabelText="e-mail" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'email')}/>
                            <br></br>
                            <TextField floatingLabelText="phone" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'phone')}/>
                            <br></br>
                            <TextField floatingLabelText="address" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'address')}/>
                            <br></br>
                            <TextField floatingLabelText="city" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'city')}/>
                            <br></br>
                            <TextField floatingLabelText="state" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'state')}/>
                            <br></br>
                            <TextField floatingLabelText="zip" /*defaultValue={this.state.name}*/
                                       onChange={event => this.update_state(event, 'zip')}/>
                            <br></br>
                        </CardText>
                        <CardActions>
                            <RaisedButton type="submit" label="ADD" primary={true}></RaisedButton>
                        </CardActions>
                    </Card>
                </form>
            </div>
        )
    }
}

export default AddContact;