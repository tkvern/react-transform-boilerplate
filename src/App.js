import React , { Component } from 'react';
import Home from './Home';
import NavBar from './shared/NavBar';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <NavBar />
        {this.props.children}
        <div className="app-footer">My Footer</div>
      </div>
    );
  }
}
export default App;