import React, {Component} from 'react'
import { Button, Form, Input, Layout } from 'element-react'
import Fade from 'react-reveal/Fade'
import {connect} from "react-redux"

import {
  actionAuthResetPassword,
} from '../../redux/actions/auth'

const mapStateToProps = state => {
  const {logged} = state.auth
  return {
    logged
  }
}
const mapDispatchToProps = {
  actionAuthResetPassword,
}
const LostPassword = connect(mapStateToProps, mapDispatchToProps)(class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
      },
      rules: {
        username: [
          { required: true, message: 'Please input user name or email', trigger: 'blur' }
        ],
      }
    }
  }
  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, {[key]: value})
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.refs.form.validate((valid) => {
      if (valid) {
        this.props.actionAuthResetPassword(this.state.form)
      } else {
        return false
      }
    })
  }
  render() {
    return (
      <div>
        <Fade>
          <div className="img-box img-box-team">
            <Fade bottom delay={200}>
              <div style={{margin: "10% 12% 10% 12%"}}>
                <div className="d-highlight d-font-black d-text-90">
                  MY ACCOUNT
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <Layout.Row>
            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100"
              className="login-ruleForm d-font-bold"
              labelPosition={"top"}
              style={{border: "2px solid #03ffa4", margin: 20, borderRadius: 10}}>
              <Layout.Row style={{fontSize: 25, margin: "-1px 0px 15px 0px"}}>
                <Layout.Col span="24">
                  <div className="grid-content d-content-highlight"
                    style={{borderRadius: "10px 10px 1px 1px"}}>
                    <div style={{display: "inline", marginLeft: 10}}>Lost Password</div>
                    <div style={{float: "right", display: "inline"}}>
                      <img src="imgs/logo3.png" alt='logo' style={{height: "35px", marginRight: 20}}/>
                    </div>
                  </div>
                </Layout.Col>
              </Layout.Row>

              <Form.Item label="USERNAME OR EMAIL ADDRESS" prop="username" style={{margin: 15}}>
                <Input value={this.state.form.username}
                  onChange={this.onChange.bind(this, 'username')}/>
              </Form.Item>
              <Form.Item style={{textAlign: "center"}}>
                <Button type="success" onClick={this.handleSubmit}>Reset Password</Button>
              </Form.Item>
            </Form>
          </Layout.Row>
        </Fade>
      </div>
    )
  }
})

export default LostPassword