import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Layout } from "element-react"
import Fade from "react-reveal/Fade"
import { callPost } from "../../services/axios";
import { actionBlogCreate } from "../../redux/actions/blog";

const rules = {
  title: [{ required: true, message: 'Please input title', trigger: 'blur' }],
  date: [{ required: true, message: 'Please input date', trigger: 'blur' }],
  content: [{ required: true, message: 'Please input content', trigger: 'blur' }],
  thumbnail: [{ required: true, message: 'Please input thumbnail', trigger: 'blur' }],
};

const AdminBlogNew = props => {

  const dispatch = useDispatch();
  const history = useHistory();
  const formRef = useRef();

  const user = useSelector(state => state.auth.user);

  const [form, setForm] = useState({
    title: '',
    date: '',
    content: '',
    thumbnail: ''
  });

  const [imgFile, setImgFile] = useState(null);

  const onFormChange = (key, value) => {
    setForm({ ...form, [key]: value });
  }

  const onFileChange = e => {
    setImgFile(e.target.files[0]);
  }

  const onSubmit = () => {
    formRef.current.validate(valid => {
      console.log(valid,imgFile)
      if (!valid || !imgFile) return false;

      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null
      const formData = new FormData();
      formData.append("img", imgFile, imgFile.name);

      callPost('/api/admin/image/upload', formData, token)
        .then(res => {
          console.log('[Image Uploaded]', res);
          let payload = Object.assign({}, form);
          payload.userId = user.id;
          payload.thumbnail = res.data.imgPath;
          dispatch(actionBlogCreate(payload));
          history.push('/admin/blogs');
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
                  <div className="ms-3">Blog Detail</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Form.Item label="Title" prop="title">
                    <Input value={form.title} onChange={val => onFormChange('title', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Date" prop="date">
                    <Input type="date" value={form.date} onChange={val => onFormChange('date', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Description" prop="content">
                    <Input type="content" value={form.content} onChange={val => onFormChange('content', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Thumbnail">
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

export default AdminBlogNew;