import React, { Component } from 'react';
import { Container } from './styles/container';
import './styles/reset.css'
import AppContent from './components/appContennt';

class App extends Component {
  render() { 
    return ( 
      <Container>
        <AppContent/>
      </Container>
    );
  }
}
 
export default App;