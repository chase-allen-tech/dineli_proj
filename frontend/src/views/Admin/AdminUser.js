import React, { useEffect, useState } from "react"
import { Button, Layout, Notification } from "element-react"
import Web3 from 'web3';
import Fade from "react-reveal/Fade"
import { Modal, Table as TableBs } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionUserList } from "../../redux/actions/user";
import { actionTokenList } from "../../redux/actions/token";

import { CONTRACT_ABI } from '../../config/abi';
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK_ENDPOINT));

function financialBalance(numMfil) {
  return Number.parseFloat(numMfil / 1e18).toFixed(18);
}

const AdminUser = props => {

  const dispatch = useDispatch();
  const [modalIndex, setModalIndex] = useState(-1);

  const users = useSelector(state => state.user.userData);
  const tokens = useSelector(state => state.token.tokenData);

  useEffect(() => {
    dispatch(actionUserList());
    dispatch(actionTokenList());
  }, []);

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

  const onTransferSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fromAddress: e.target.fromAddress.value,
      toAddress: e.target.toAddress.value,
      tokenAddress: e.target.tokenAddress.value,
      tokenAmount: web3.utils.toWei(e.target.tokenAmount.value, 'ether'),
      gasPriceGwei: 3,
      gasLimit: 300000,
      chainId: 42,
    }

    try {

      let contract = new web3.eth.Contract(CONTRACT_ABI, payload.tokenAddress);

      // # of transactions in my account
      let count = await web3.eth.getTransactionCount(payload.fromAddress);
      console.log('Number of transactions so far in my account: ', count);

      // My balance
      let balance = await contract.methods.balanceOf(payload.fromAddress).call();
      console.log('Balance before send: ', financialBalance(balance));

      let encoded = contract.methods.transfer(payload.toAddress, payload.tokenAmount).encodeABI();
      let tx = {
        gasLimit: web3.utils.toHex(6200000),
        to: payload.tokenAddress,
        data: encoded,
        chainId: payload.chainId
      };

      let signed = await web3.eth.accounts.signTransaction(tx, process.env.REACT_APP_MY_ACCOUNT_PRIVATE_KEY);
      web3.eth.sendSignedTransaction(signed.rawTransaction).once('receipt', receipt => {
        console.log(receipt)
        if (receipt.status) { successMsg(receipt.transactionHash); } else { errorMsg(); }
      }).catch(err => { errorMsg(); });
    } catch (err) {
      console.log('[err]', err);
      errorMsg();
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Users</h1>
          <div className="d-flex">
            <Link to="/admin/users/new" className="ms-auto">
              <Button type="outlined">New User</Button>
            </Link>
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
                    <th className="bg-secondary">#</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Email</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Wallet Address</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, key) =>
                      <tr key={key} onClick={() => setModalIndex(key)} style={{ cursor: 'pointer' }}>
                        <td>{key + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.walletAddress}</td>
                        <td>{user.role[0]}</td>
                      </tr>
                    )
                  }
                </tbody>
              </TableBs>
            </div>
          </div>
        </Fade>
      </div>

      <Modal show={modalIndex >= 0} onHide={() => setModalIndex(-1)}>
        <Modal.Header>
          <Modal.Title>Transfer Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onTransferSubmit}>
            <div className="form-group">
              <div><b>From:</b> {process.env.REACT_APP_MY_ACCOUNT}</div>
              <div><b>To:</b> {users[modalIndex]?.walletAddress}</div>

              <input name="fromAddress" value={process.env.REACT_APP_MY_ACCOUNT || ''} hidden readOnly />
              <input name="toAddress" value={users[modalIndex]?.walletAddress || ''} hidden readOnly />
            </div>
            <div className="form-group mt-2">
              <label>Token:</label>
              <select className="form-select" name="tokenAddress">
                {
                  tokens?.map((token, key) => <option key={key} value={token.tokenAddress}>{token.tokenAddress}</option>)
                }
              </select>
            </div>
            <div className="form-group mt-3">
              <div className="d-flex">
                <input type="number" className="form-control" step="any" name="tokenAmount" required placeholder="Input the amount to transfer" />
                <button type="submit" className="btn btn-secondary ms-2" >Send</button>
              </div>
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalIndex(-1)}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AdminUser;