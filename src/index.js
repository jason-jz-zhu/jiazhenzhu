import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Initialize the network connection
// for the query/mutations
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjb5wwwvz1r9s0100t6ty4lg8' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// render
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'),
);
registerServiceWorker();
