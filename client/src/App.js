import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import TripDash from './components/Pages/TripDash';
import Rides from './components/Rides';
import Supplies from './components/Supplies';
import Guests from './components/Guests';
import NewTrip from './components/Pages/NewTrip';
import Invitation from './components/Pages/Invitation';
import InviteGuests from './components/InviteGuests';
import PostRide from './components/PostRide';

class App extends Component {
state= {
  tripID: undefined,
  rideID: undefined,
}
  handleNewTrip = (id) => {
    this.setState({ tripID: id })
  }

  handleNewRide = (id) => {
    this.setState({ rideID: id })
  }

  render() {
    return (

      <Router>

        <Route exact path="/" component={Signup} />

        <Route path="/login" component={Login} />

        <Route path="/home" component={Home} />

        <Route path="/NewTrip" render={() => <NewTrip onNewTrip={this.handleNewTrip} />} />

        <Route path="/inviteGuests" render={() => <InviteGuests tripID={this.state.tripID} />} />

        <Route path="/tripdash" render={() => <TripDash tripID={this.state.tripID} />} />

        <Route path="/rides" render={() => <Rides tripID={this.state.tripID} rideID={this.state.rideID} />} />

        <Route path="/postRide" render={() => <PostRide tripID={this.state.tripID} />} />

        <Route path="/supplies" component={Supplies} />

        <Route path="/guests" component={Guests} />

        <Route path="/invitation" component={Invitation} />

      </Router>


    );
  }
}

export default App;