import React, { useEffect, useState } from "react"
import { Layout, Notification, Button, Form, Input } from "element-react"
import Fade from "react-reveal/Fade"
import { Modal, Table as TableBs } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { actionUserList } from "../../redux/actions/user";
import { callPost } from "../../services/axios";

// import { CONTRACT_ABI } from '../../config/abi';

const TYPES = ['NONE', 'BASIC', 'GOLD', 'PREMIUM'];

const AdminNewsletter = props => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.userData);
  const [modal, setModal] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!users)
      dispatch(actionUserList());
  }, []);

  const onUserClick = (e, key) => {
    console.log(e.target);
    if (e.target.id.indexOf('check') === -1)
      document.getElementById(`check_${key}`).checked = !document.getElementById(`check_${key}`).checked
    console.log('user click', key);
  }

  const onSelectAll = (e) => {
    let checked = e.target.checked;
    let elements = document.querySelectorAll('td > input');

    for (let elem of elements) {
      elem.checked = checked;
    }
  }

  const onTransferSubmit = (e) => {
    let elements = document.querySelectorAll('td > input');
    let emails = [];
    for (let elem of elements) {
      if (elem.checked) {
        let index = Number(elem.id.split('_')[1]);
        emails.push(users[index].email);
      }
    }
    if (emails.length === 0) {
      Notification.error({
        title: 'Warning',
        message: 'Select at least one user!',
        type: 'Warning',
      });
      return;
    }
    if(!subject.trim() || !content.trim()){
      Notification.error({
        title: 'Warning',
        message: 'Please fill in the subject and content',
        type: 'Warning',
      });
    }
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['accessToken'] : null;
    callPost('/api/admin/newsletter', {emails, subject, content}, token)
      .then(res => {
        Notification.success({
          title: 'Success',
          message: 'Send Newsletters Success!',
          type: 'success',
        });
      }).catch(err => {
        console.log('[Image Upload Fail]', err);
      })
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Newsletter</h1>
          <div className="d-flex">
            <Button type="outlined" className='ms-auto' onClick={() => setModal(true)}>Send Newsletter</Button>
          </div>
          <div className="login-ruleForm mt-4" labelposition={"top"} style={{ border: "2px solid #03ffa4", borderRadius: "10px 10px 0 0" }}>
            <Layout.Row style={{ fontSize: 25, margin: "-1px 0px 0 0px" }}>
              <Layout.Col span="24">
                <div className="grid-content d-content-highlight d-flex" style={{ borderRadius: "10px 10px 1px 1px" }}>
                  <div className="ms-3">List</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <div className="w-100 overflow-auto">
              <TableBs striped hover variant="dark" style={{ margin: 0 }} className="text-center">
                <thead>
                  <tr>
                    <th className="bg-secondary"><input type='checkbox' onChange={onSelectAll}></input></th>
                    <th className="bg-secondary">#</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Email</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Wallet Address</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Role</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, key) =>
                      <tr key={key} onClick={(e) => onUserClick(e, key)} style={{ cursor: 'pointer' }}>
                        <td><input id={`check_${key}`} type='checkbox' /></td>
                        <td>{key + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.walletAddress}</td>
                        <td>{user.role[0]}</td>
                        <td>{TYPES[user.type]}</td>
                      </tr>
                    )
                  }
                </tbody>
              </TableBs>
            </div>
          </div>
        </Fade>
      </div>
      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header>
          <Modal.Title>Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onTransferSubmit}>
            <div className="form-group mt-2">
              <label>Subject:</label>
              <Input type='text' onChange={val=>setSubject(val)}/>
            </div>
            <div className="form-group mt-2">
              <label>Content:</label>
              <Input type='textarea' onChange={val=>setContent(val)}/>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModal(false)}>Close</Button>
              <button type="submit" className="btn btn-secondary ms-2" >Send</button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default AdminNewsletter;