import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Launches from './components/Lunches';
import LaunchDetails from './components/LaunchDefails';

import './App.css';
import logo from './spaceX.png';

// Creating a client and passing 
// the GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <img src={logo} alt="SpaceXLogo"className="logo" />
            <Route exact path="/" component={Launches} /> 
            <Route  path="/launch/:flight_number" component={LaunchDetails} /> 
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
