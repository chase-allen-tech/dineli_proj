import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Layout } from "element-react"
import Fade from "react-reveal/Fade"
import { actionTeamCreate } from "../../redux/actions/team";
import { callPost } from "../../services/axios";

const rules = {
  name: [{ required: true, message: 'Please input website title', trigger: 'blur' }],
  job: [{ required: true, message: 'Please input job', trigger: 'blur' }],
};

const AdminTeamNew = props => {

  const dispatch = useDispatch();
  const history = useHistory();
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    job: '',
    content: '',
    avatar: '',
  });

  const [imgFile, setImgFile] = useState(null);

  const onFileChange = e => {
    setImgFile(e.target.files[0]);
  }

  const onFormChange = (key, value) => {
    setForm({ ...form, [key]: value });
  }

  const onSubmit = () => {
    formRef.current.validate(valid => {
      if (!valid || !imgFile) return false;

      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null
      const formData = new FormData();
      formData.append("img", imgFile, imgFile.name);

      callPost('/api/admin/image/upload', formData, token)
        .then(res => {
          console.log('[Image Uploaded]', res);
          let payload = Object.assign({}, form);
          payload.avatar = res.data.imgPath;
          dispatch(actionTeamCreate(payload));
          history.push('/admin/teams');
        }).catch(err => {
          console.log('[Image Upload Fail]', err);
        })
    });
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <Form ref={formRef} model={form} rules={rules} labelWidth="100" className="login-ruleForm d-font-bold" labelPosition={"top"} style={{ border: "2px solid #03ffa4", margin: 20, borderRadius: 10 }}>
            <Layout.Row style={{ fontSize: 25, margin: "-1px 0px 15px 0px" }}>
              <Layout.Col span="24">
                <div className="grid-content d-content-highlight d-flex" style={{ borderRadius: "10px 10px 1px 1px" }}>
                  <div className="ms-3">Team Membar</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Form.Item label="Name" prop="name">
                    <Input value={form.name} onChange={val => onFormChange('name', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Job" prop="job">
                    <Input type="job" value={form.job} onChange={val => onFormChange('job', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Content" prop="content">
                    <Input value={form.content} onChange={val => onFormChange('content', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Avatar">
                    <div className="bg-white d-flex rounded justify-content-center align-items-center position-relative overflow-hidden d-inline-block w-100" style={{ height: 36 }}>
                      {
                        imgFile ? <div className="text-muted bg-white">{imgFile.name}</div> : <div className="text-muted bg-white" style={{ fontSize: 30 }}>+</div>
                      }

                      <input type="file" onChange={onFileChange} className="position-absolute top-0 left-0 opacity-0 w-100 h-100" />
                    </div>
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item style={{ textAlign: "center" }}>
                    <Button type="success" onClick={onSubmit}>Create</Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </Fade>
      </div>
    </div>
  )
}

export default AdminTeamNew;