import React, {Component} from "react"
import {Layout} from "element-react"
import Login from "../Login"
import Register from "../Register"
import Fade from "react-reveal/Fade"

class LogRegister extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fade bottom delay={200}>
                <h1 style={{textAlign:"center"}} className='d-font-bold d-text-90 d-white'>Welcome to Administrator Page</h1>
                <Layout.Row>
                    <Layout.Col sm="24" md={12}>
                        <div className="grid-content">
                            <Login/>
                        </div>
                    </Layout.Col>
                    <Layout.Col sm="24" md={12}>
                        <div className="grid-content">
                            <Register/>
                        </div>
                    </Layout.Col>
                </Layout.Row>
            </Fade>
        )
    }
}

export default LogRegister