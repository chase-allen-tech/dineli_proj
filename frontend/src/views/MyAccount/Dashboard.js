
import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <>
        <div className="d-content-highlight d-font-strong d-black d-text-30" style={{padding: '24px 4%', display: 'flex', alignItems: 'center'}}>
          Welcome to dienli.com, Your source for Tokenized real estate
          <img className="img-mobile" src="imgs/account/logo.png" alt="" style={{marginLeft: 'auto'}} />
        </div>
        <div className="d-font-strong d-white d-text-24" style={{padding: '24px 12px'}}>
          Check out dineli's latest properties: dineli Marketplace
          Please use the menu links to view your portfolio and manage your account.
          Need assistance? Please reach out to us via our chat below, or email us at: help@dienli.com.
        </div>
      </>
    )
  }
}

export default Dashboard;
