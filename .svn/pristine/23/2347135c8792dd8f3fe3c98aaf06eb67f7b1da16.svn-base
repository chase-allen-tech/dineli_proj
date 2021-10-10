import React, { useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Layout, Notification } from "element-react"
import Fade from "react-reveal/Fade"
import { Table as TableBs } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { actionUserList, actionUserSetCurrent } from "../../redux/actions/user";

// import { CONTRACT_ABI } from '../../config/abi';

const TYPES = ['NONE', 'BASIC', 'GOLD', 'PREMIUM'];

const AdminUser = props => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.user.userData);
  const history = useHistory();

  useEffect(()=>{
    // if(!users)
      dispatch(actionUserList());
  },[]);

  const successMsg = (msg) => {
    Notification.success({
      title: 'Success',
      message: 'Transaction Success!',
      type: 'success',
    });
  }

  const errorMsg = () => {
    Notification.error({
      title: 'Failed',
      message: 'Transaction failed. Please try again!',
      type: 'Warning',
    });
  }

  const onUserClick = (e, key) => {
    console.log('user click', key);
    dispatch(actionUserSetCurrent(users[key]));
    history.push('/admin/users/update');
  }
  // const onTransferSubmit = async (e) => {
  //   e.preventDefault();
  //   setModalIndex(-1);
  //   const payload = {
  //     fromAddress: e.target.fromAddress.value,
  //     toAddress: e.target.toAddress.value,
  //     tokenAddress: e.target.tokenAddress.value,
  //     tokenAmount: e.target.tokenAmount.value,
  //     chainId: 42,
  //   }

  //   let transferResult = await transferToken(credentials[0]?.infuraProjectEndpoint, credentials[0]?.walletPrivateKey, payload.fromAddress, payload.toAddress, payload.tokenAddress, payload.tokenAmount, payload.chainId);
  //   if (transferResult.success) {
  //     successMsg();
  //   } else {
  //     errorMsg();
  //   }
  // }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Users</h1>
          {/* <div className="d-flex">
            <Link to="/admin/users/new" className="ms-auto">
              <Button type="outlined">New User</Button>
            </Link>
          </div> */}
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
    </div>
  )
}

export default AdminUser;