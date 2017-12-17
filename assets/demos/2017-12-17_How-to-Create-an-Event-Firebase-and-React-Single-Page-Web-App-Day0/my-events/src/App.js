import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = { events: [] };
	}
	addEvent(e){
	  e.preventDefault();
	  fire.database().ref('events').push( this.eventNameEl.value );
	  this.eventNameEl.value = '';
	}
	componentWillMount(){
	  let eventsRef = fire.database().ref('events').orderByKey();
	  eventsRef.on('child_added', eventNew => {
	    let event = { text: eventNew.val(), id: eventNew.key };
	    this.setState({ events: [event].concat(this.state.events) });
	  })
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<form onSubmit={this.addEvent.bind(this)}>
					<input type="text" ref={ el => this.eventNameEl = el }/>
					<input type="submit"/>
					{
						this.state.events.map( event => <div key={event.id}>{event.text}</div> )
					}
				</form>
      </div>
    );
  }
}
export default App;



