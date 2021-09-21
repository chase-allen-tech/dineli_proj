import React, { Component } from 'react'
import { Layout } from 'element-react'

import { TheContent, TheFooter, TheHeader } from './index'
import { Redirect } from 'react-router';

class TheLayout extends Component {
  render() {

    const passed = localStorage.getItem('passed');

    return (
      <>
        {
          passed === 'true' ?
            <div>
              <Layout.Row>
                <Layout.Col span="24" style={{ backgroundColor: '#000000', zIndex: 1000, position: "fixed", borderBottom: '1px solid gray' }}>
                  <div className="grid-content bg-purple-light"><TheHeader /></div>
                </Layout.Col>
              </Layout.Row>
              <Layout.Row className='app-content' style={{ zIndex: 1 }}>
                <Layout.Col span="24">
                  <div className="grid-content bg-purple-light"><TheContent /></div>
                </Layout.Col>
              </Layout.Row>
              <Layout.Row>
                <Layout.Col span="24">
                  <div className="grid-content bg-purple-light"><TheFooter /></div>
                </Layout.Col>
              </Layout.Row>
            </div>
            :
            <Redirect to="/get-access" />
        }

      </>
    )
  }
}

export default TheLayout