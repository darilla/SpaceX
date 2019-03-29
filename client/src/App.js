import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import logo from './spaceX.png';
import Launches from './components/Lunches';

// Passing the GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <img src={logo} alt="SpaceXLogo"className="logo" />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
