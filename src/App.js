import React from 'react';
import './App.css';
import ViewDetails from './components/viewDetails';
import InsertDetails from './components/insertDetails';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      userDetails: [
        {
          firstName: "Sidhhu",
          age: 23
        },
        {
          firstName: "Dheepak",
          age: 18
        }
      ]
    }
  }

  render() {
    return(
      <div className="App">
        <center>
          <ViewDetails userDetails={this.state.userDetails}/>
        </center>
        <br/><br/>
        <InsertDetails/>
      </div>
    );
  }
}

export default App;
