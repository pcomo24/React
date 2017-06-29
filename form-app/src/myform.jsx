import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './myform.css';

class MyForm extends Component {
    constructor (props) {
        super(props);
        this.state = {name: '', color: 'blue'};
    }

    update_name (event) {
        console.log(event);
        this.setState({name: event.target.value});
    }

    update_color (event) {
        console.log(event);
        this.setState({color: event.target.value});
    }
    //refactored method so you don't have to re-write the 2 above
    update_state (event, key) {
        this.setState({[key]: event.target.value});
    }

    handleSubmit(event) {
        console.log('submitted: ',  this.state);
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <Card className="md-card">
                        <CardTitle title ="My Form"/>
                        <CardText>
                            <TextField floatingLabelText="Your Name" defaultValue={this.state.name}
                                       onChange={event => this.update_state(event, 'name')}/>
                            <br></br>
                            {/*refactored version for used for color*/}
                            <SelectField floatingLabelText="Color" value={this.state.color} onChange={this.update_select}>
                                <MenuItem value="red" primaryText="Red" />
                                <MenuItem value="blue" primaryText="Blue" />
                            </SelectField>
                            <br></br>
                        </CardText>
                        <cardActions>
                            <RaisedButton type="submit" label="submit" primary={true}></RaisedButton>
                        </cardActions>
                    </Card>
                </form>
            </div>
        )
    }
}

export default MyForm;