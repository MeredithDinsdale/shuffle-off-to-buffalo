/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ListItem } from '../../layoutComponents/List';
import { Row, Col, Container } from '../../layoutComponents/Grid';
import API from '../../../utils/API';
import Nav from '../../layoutComponents/Nav';
import AddSuppliesForm from './AddSuppliesForm';

class AddSupplies extends Component {

  render() {
    console.log(this.props.tripID)
    return (
      <Fragment>
        <Nav />
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4" />
            <div className="col-md-4 text-center">

              <Link to="/rides">
                <button type="button" className="button btnNav">Rides</button>
              </Link>
              <Link to="/tripDash">
                <button type="button" className="button btnNav">This Trip</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>

            </div>
            <div className="col-md-4" />
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 id="subHeadline">Create a Shopping List for your Trip!</h4>
            </div>
          </div>
          <AddSuppliesForm />
          <br />
          <p>
          <Link to="/tripDash" id="linkP">
            
              Skip This Step
            
          </Link>
          </p>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(AddSupplies);
