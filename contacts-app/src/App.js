import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import AddContact from './add';
import ContactList from './contacts' ;

//theme forms
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green900} from 'material-ui/styles/colors';
import {auth} from './firebase.js';

//import {BrowserRouter, Route, Link} from 'react-router-dom';


const theme = getMuiTheme({palette: {primary1Color: green900}});

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
        <Provider store={store}>
          <MuiThemeProvider muiTheme={theme}>
              <div>
                  <AppBar title='Contact List' />
                  <BrowserRouter>
                      <div>
                          <button onClick={(e) => this.login()}>Login</button>
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/add">Add Contact</Link></li>
                          </ul>
                          <Route exact path="/" component={ContactList} />
                          <Route path="/add" component={ AddContact } />
                      </div>

                    </BrowserRouter>
              </div>
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
