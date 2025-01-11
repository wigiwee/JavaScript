import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: InMemoryCache(),
})

const query = `
query GetTodos{
  getTodos{
    titles
    completed
    user{
      name 
      email
      phone 
    }
  }
}`
ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,
  document.getElementById('root')
);
