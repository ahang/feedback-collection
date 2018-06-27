import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    const { handleToken } = this.props;
    return (
      <StripeCheckout
        name='Feedback Collector'
        description='$5.00 for 5 Feedback Credits'
        amount={500}
        token={token => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);