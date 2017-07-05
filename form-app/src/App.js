import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//theme forms
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import MyForm from './myform';

import {auth} from './fsociety.js';

const Home = () => (<h2>Home</h2>)

const theme = getMuiTheme({palette: {primary1Color: red700}});
class App extends Component {
    login () {
        auth()
            .then(function (user) {
                console.log(user);
            })
            .catch(function (e) {
                console.log(e);
            });
    }
  render() {
    return (
        <MuiThemeProvider muiTheme={theme}>
            <div>
                <AppBar title="My Awesome Form" />
                <div>
                    <button onClick={(e) => this.login()}>Login</button>
                </div>
                <BrowserRouter>
                    <div>
                        <ul>
                            {/*urls as links*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/form">Form</Link></li>
                        </ul>
                            {/*when go to / url load 'Home', when go to /form url load 'MyForm'*/}
                        <Route exact path="/" component={Home}/>
                        <Route path="/form" component={MyForm}/>
                    </div>
                </BrowserRouter>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
