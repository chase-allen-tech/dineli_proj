import { Component } from "react"
import { Button, Checkbox, Form, Input, Layout } from 'element-react'
import 'element-theme-default'
import { Link } from "react-router-dom"
import { actionAuthLogin } from "../redux/actions/auth"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  const {logged} = state
  return {
    logged
  }
}

const mapDispatchToProps = {actionAuthLogin}

const Login = connect(mapStateToProps, mapDispatchToProps)(
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        form: {
          password: '',
          username: '',
        },
        rules: {
          username: [
            { required: true, message: 'Please input user name or email', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input the password', trigger: 'blur' },
          ]
        }
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.refs.form.validate((valid) => {
        if (valid) {
          // ===============action function======================
          this.props.actionAuthLogin(this.state.form)
        } else {
          return false
        }
      })
    }

    handleReset(e) {
      e.preventDefault()
      this.refs.form.resetFields()
    }

    onChange(key, value) {
      this.setState({
        form: Object.assign({}, this.state.form, {[key]: value})
      })
    }

    render() {
      return (
        <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100"
          className="login-ruleForm d-font-bold"
          labelPosition={"top"}
          style={{border: "2px solid #03ffa4", margin: 20, borderRadius: 10}}>
          <Layout.Row style={{fontSize: 25, margin: "-1px 0px 15px 0px"}}>
            <Layout.Col span="24">
              <div className="grid-content d-content-highlight"
                style={{borderRadius: "10px 10px 1px 1px"}}>
                <div style={{display: "inline", marginLeft: 10}}>Login</div>
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
          <Form.Item label="PASSWORD" prop="password" style={{margin: 15}}>
            <Input type="password" value={this.state.form.password}
              onChange={this.onChange.bind(this, 'password')}
              autoComplete="off"/>
          </Form.Item>
          <div style={{textAlign: "center"}}>
            <Checkbox>REMEMBER ME</Checkbox>
          </div>
          <Form.Item style={{textAlign: "center"}}>
            <Button type="success" onClick={this.handleSubmit}>LOGIN</Button>
          </Form.Item>
          <div style={{textAlign: "center", marginTop: -5, marginBottom: 15}}>
            <Link to={"/my-account/lost-password"}>Lost your password?</Link>
          </div>
        </Form>
      )
    }
  }
)

export default Login