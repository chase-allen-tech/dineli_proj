import React from "react"
import { Layout } from "element-react"
import Login from "../Login"
import Register from "../Register"
import Fade from "react-reveal/Fade"

const AdminLog = props => {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Log</h1>
          <Layout.Row>
            <Layout.Col sm="24" md={12}>
              <div className="grid-content">
                <Login />
              </div>
            </Layout.Col>
            <Layout.Col sm="24" md={12}>
              <div className="grid-content">
                <Register />
              </div>
            </Layout.Col>
          </Layout.Row>
        </Fade>
      </div>
    </div>
  )
}

export default AdminLog