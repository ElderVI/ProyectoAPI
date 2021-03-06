import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateUser from './components/CreateUser'


import './App.css';



function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={NotesList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/edit/:id" component={CreateUser}/>
      </div>
     
    </Router>
  );
}

export default App;
