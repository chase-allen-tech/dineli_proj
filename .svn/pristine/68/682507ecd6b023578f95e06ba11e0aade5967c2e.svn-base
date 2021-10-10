import React, { useState } from "react"
import { Button, Form, Input, Layout } from "element-react"
import Fade from "react-reveal/Fade"

const rules = {
  senderName: [{ required: true, message: 'Please input Sender Name', trigger: 'blur' }],
  email: [{ required: true, message: 'Please input email', trigger: 'blur' }]
};

const AdminEmail = props => {

  const [form, setForm] = useState({
    senderName: '',
    email: '',
    newsletterSending: '',
    smtpSetting: '',
  });

  const onFormChange = (key, value) => {
    setForm({ [key]: value });
  }

  const onSubmit = () => {

  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <Form model={form} rules={rules} labelWidth="100" className="login-ruleForm d-font-bold" labelPosition={"top"} style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
            <Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
              <Layout.Col span="24">
                <div className="grid-content d-content-highlight d-flex" style={{ borderRadius: "10px 10px 1px 1px" }}>
                  <div className="ms-3">Email Settings</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <Form.Item label="Sender Name" prop="senderName" className="m-3 mt-4">
              <Input value={form.senderName} onChange={val => onFormChange('senderName', val)} />
            </Form.Item>

            <Form.Item label="Email" prop="email" className="m-3 mt-4">
              <Input type="email" value={form.email} onChange={val => onFormChange('email', val)} autoComplete="off" />
            </Form.Item>

            <Form.Item label="Newsletter Sending" prop="newsletterSending" className="m-3 mt-4">
              <Input value={form.newsletterSending} onChange={val => onFormChange('newsletterSending', val)} />
            </Form.Item>

            <Form.Item label="SMTP Setting" prop="smtpSetting" className="m-3 mt-4">
              <Input value={form.smtpSetting} onChange={val => onFormChange('smtpSetting', val)} />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="success" onClick={onSubmit}>Save</Button>
            </Form.Item>
          </Form>
        </Fade>
      </div>
    </div>
  )
}

export default AdminEmail;