import React from 'react';
import './App.css';
import { ViewDetails } from './components/index';

class App extends React.Component {
  // constructor(props) {
  //   super (props);
  // }

  render() {
    return(
      <div className="App">
        <ViewDetails/>
      </div>
    );
  }
}

export default App;
