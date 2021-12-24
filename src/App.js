import React, { Component } from 'react';
import './App.scss';
import { Button, Content, Header } from 'carbon-components-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mailer from './components/Mailer';



class App extends Component {
  render() {

    return (
      <>
        <Mailer />
        
      </>
    )} 
  }

export default App;
