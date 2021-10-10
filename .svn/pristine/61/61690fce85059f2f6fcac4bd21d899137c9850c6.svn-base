import React, { useState } from "react"
import { Button, Form, Input, Layout } from "element-react"
import Fade from "react-reveal/Fade"

const rules = {
  websiteTitle: [{ required: true, message: 'Please input website title', trigger: 'blur' }],
  description: [{ required: true, message: 'Please input description', trigger: 'blur' }]
};

const AdminSiteSetting = props => {

  const [form, setForm] = useState({
    websiteTitle: '',
    description: '',
    keywords: '',
    address: '',
    phoneNumber: '',
    language: ''
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
                  <div className="ms-3">Site Settings</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <Form.Item label="Website Title" prop="websiteTitle" className="m-3 mt-4">
              <Input value={form.websiteTitle} onChange={val => onFormChange('websiteTitle', val)} />
            </Form.Item>

            <Form.Item label="Description" prop="description" className="m-3 mt-4">
              <Input type="description" value={form.description} onChange={val => onFormChange('description', val)} autoComplete="off" />
            </Form.Item>

            <Form.Item label="Keywords" prop="keywords" className="m-3 mt-4">
              <Input value={form.keywords} onChange={val => onFormChange('keywords', val)} />
            </Form.Item>

            <Form.Item label="Address" prop="address" className="m-3 mt-4">
              <Input value={form.address} onChange={val => onFormChange('address', val)} />
            </Form.Item>

            <Form.Item label="Language" prop="language" className="m-3 mt-4">
              <Input value={form.language} onChange={val => onFormChange('language', val)} />
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

export default AdminSiteSetting;