
import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class IDVerification extends Component {

  render() {
    return (
      <>
        <div className="d-content-highlight d-font-strong d-black d-text-30" style={{padding: '4px 4%', display: 'flex', alignItems: 'center'}}>
          Identity Verification
          <img className="img-mobile" src="imgs/account/logo.png" alt="" style={{marginLeft: 'auto'}} />
        </div>
        <FormControl
          placeholder="You need to Verify Your Identity to Buy Tokens and Claiming Rent"
          className="d-font-bold d-text-24"
          as="textarea"
          style={{height: '20rem', borderRadius: 0, padding: 20, marginBottom: 12}}
        />
        <div className="d-content-center" style={{marginTop: 'auto'}}>
          <Button className="d-font-bold d-text-24" style={{paddingLeft: 36, paddingRight: 36}}>
            SUBMIT DOCUMENTS HERE
          </Button>
        </div>
      </>
    )
  }
}

export default IDVerification;
