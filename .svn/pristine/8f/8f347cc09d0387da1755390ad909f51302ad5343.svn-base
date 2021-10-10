import React, { Component } from 'react'
import { Layout } from 'element-react'

import { TheContent, TheFooter, TheHeader } from './index'
// import Sidebar from './Sidebar'
import AdminSidebar from './AdminSidebar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class TheAdminLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: this.props.logged
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.roles[0] !== 'ADMIN') {
        this.setState({ logged: false });
      }
    }
  }

  render() {
    const passed = localStorage.getItem('passed');

    return (
      <>
        {
          passed === 'true' ?
            <div>
              {
                this.state.logged ?
                  <Layout.Row className='d-flex'>
                    <div className="w-100">
                      <div className="container-fluid">
                        <div className="row flex-nowrap">
                          <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark position-relative min-vh-100" style={{ borderRight: '2px solid gray' }}>
                            <AdminSidebar />
                          </div>
                          <div className="col col-md-9 col-xl-10 py-5 overflow-auto">
                            <TheContent />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Layout.Row>
                  :
                  <Redirect to="/home" />
              }

            </div> :
            <Redirect to="/get-access" />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { logged, user } = state.auth
  return {
    logged, user
  }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(TheAdminLayout)