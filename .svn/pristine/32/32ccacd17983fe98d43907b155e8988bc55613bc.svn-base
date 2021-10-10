import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login"
import Fade from "react-reveal/Fade"
import { Button, Form, Input, Layout, Notification } from "element-react"
import { actionAuthResetNewPassword } from "../../redux/actions/auth";

const rules = {
  password: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  confirm: [{ required: true, message: 'This field is required', trigger: 'blur' }]
};

const AdminDashboard = props => {

  const dispatch = useDispatch();
  const formRef = useRef();
  const user = useSelector(state => state.auth.user);

  const [form, setForm] = useState({
    password: '',
    confirm: '',
  });

  const onFormChange = (key, value) => {
    setForm({...form, [key]: value});
  }
  const onSubmit = () => {
    formRef.current.validate(valid => {
      if(!valid) return;

      if(form.password != form.confirm) {
        Notification.error({
          title: 'Failed',
          message: 'Password does not match',
          type: 'Warning',
        });
        return;
      }
      
      let payload = {
        username: user.email,
        password: form.password
      }

      dispatch(actionAuthResetNewPassword(payload));
    });
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Welcome to Administrator Page</h1>
          <Layout.Row>
            <Layout.Col sm="24" md={12}>
              <div className="grid-content">
                <Login />
              </div>
            </Layout.Col>
            <Layout.Col sm="24" md={12}>
              <div className="grid-content">
                <Form ref={formRef} model={form} rules={rules} labelWidth="100" className="login-ruleForm d-font-bold" labelPosition={"top"} style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
                  <Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
                    <Layout.Col span="24">
                      <div className="grid-content d-content-highlight d-flex" style={{ borderRadius: "10px 10px 1px 1px" }}>
                        <div className="ms-3">Reset Password</div>
                        <div className="ms-auto me-3 d-flex align-items-center">
                          <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                        </div>
                      </div>
                    </Layout.Col>
                  </Layout.Row>

                  <Form.Item label="Password" prop="password" className="m-3 mt-4">
                    <Input type="password" value={form.password} onChange={val => onFormChange('password', val)} />
                  </Form.Item>

                  <Form.Item label="Confirm" prop="confirm" className="m-3 mt-4">
                    <Input type="password" value={form.confirm} onChange={val => onFormChange('confirm', val)} autoComplete="off" />
                  </Form.Item>

                  <Form.Item style={{ textAlign: "center" }}>
                    <Button type="success" onClick={onSubmit}>Save</Button>
                  </Form.Item>
                </Form>
              </div>
            </Layout.Col>
          </Layout.Row>
        </Fade>
      </div>
    </div>
  )
}

export default AdminDashboard