import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const query =  `
query etTodos{
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
class App extends Component {
  render() {
    const {data , loading} = useQuery(query);
    if (loading) return <h1>Loading...</h1>;
    return (
      <div className="App">
         {JSON.stringify(data)}
      
      </div>
    );
  }
}

export default App;
