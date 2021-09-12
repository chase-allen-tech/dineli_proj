import React, { Fragment, useEffect, useState } from "react"
import { Button, Layout, Notification } from "element-react"
import Web3 from 'web3';
import Fade from "react-reveal/Fade"
import { Modal, Table as TableBs } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionUserList } from "../../redux/actions/user";
import { actionTokenList } from "../../redux/actions/token";

// import { CONTRACT_ABI } from '../../config/abi';
import { transferToken } from "../../services/crypto";
import { actionOrderList, actionOrderUpdate } from "../../redux/actions/order";
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK_ENDPOINT));

const AdminTransaction = props => {

  const dispatch = useDispatch();
  const [modalIndex, setModalIndex] = useState(-1);
  const [transactions, setTransactions] = useState([]);
  const [processing, setProcessing] = useState(false);

  const users = useSelector(state => state.user.userData);
  const orders = useSelector(state => state.order.orderData);

  useEffect(() => {
    dispatch(actionUserList());
    // dispatch(actionTokenList());
    dispatch(actionOrderList());
  }, []);

  useEffect(() => {
    if (!orders.length) return;

    let ordersClone = [];
    for (let order of orders) {
      if (!Array.isArray(order.details)) {
        order.details = JSON.parse(order.details);
      }
      ordersClone.push(order);
    }

    setTransactions(ordersClone);
  }, [orders]);

  const onTransferSubmit = async () => {
    setProcessing(true);
    let newTransactions = [];
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      let transactionClone = Object.assign({}, transaction);

      if (transaction.status == 'complete') {
        newTransactions.push(transactionClone);
        continue;
      }

      let isError = false;
      for (let j = 0; j < transaction.details.length; j++) {
        const detail = transaction.details[j];
        const payload = {
          fromAddress: process.env.REACT_APP_MY_ACCOUNT,
          toAddress: detail.toAddress,
          tokenAddress: detail.tokenAddress,
          tokenAmount: detail.tokenQuantity,
          chainId: process.env.REACT_APP_CHAIN_ID
        }

        console.log('[payload]', payload);

        let transferResult = await transferToken(payload.fromAddress, payload.toAddress, payload.tokenAddress, payload.tokenAmount, payload.chainId)
        if (transferResult.success) {
          console.log(transferResult.data);
          transactionClone.details[j]['hash'] = transferResult.data.transactionHash;
        } else {
          isError = true;
          console.log(transferResult);
        }
      }

      if (!isError) {
        transactionClone.status = 'complete';
      }

      newTransactions.push(transactionClone);

      const payload = {
        id: transactionClone.id,
        userId: transactionClone.userId,
        status: transactionClone.status,
        totalPrice: transactionClone.totalPrice,
        count: transactionClone.count,
        paymentMethod: transactionClone.paymentMethod,
        details: JSON.stringify(transactionClone.details)
      }

      dispatch(actionOrderUpdate(payload));
    }

    setTransactions(newTransactions);
    setProcessing(false);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Transaction</h1>
          <div className="d-flex">
            <Button type="outlined" className="ms-auto" onClick={onTransferSubmit} disabled={processing}>
              {
                processing ? "Processing" : "Complete Transactions"
              }
            </Button>
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
                    <th className="bg-secondary">Status</th>
                    <th className="bg-secondary">User</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Total Price</th>
                    <th className="bg-secondary">Count</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Payment Method</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Token Address</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Target Wallet Address</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Token Quantity</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Transaction Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    transactions.map((transaction, key) =>
                      <Fragment key={key}>
                        {
                          transaction.details.map((detail, key1) =>
                            <tr key={key1} className="align-middle">
                              {
                                key1 === 0 &&
                                <>
                                  <td rowSpan={transaction.details.length}>{key + 1}</td>
                                  <td rowSpan={transaction.details.length}>
                                    {
                                      transaction.status === 'pending' ? 
                                      <div className="badge bg-primary">{transaction.status}</div>
                                      :
                                      <div className="badge bg-secondary">{transaction.status}</div>
                                    }
                                    
                                  </td>
                                  <td rowSpan={transaction.details.length}>{users.find(user => user.id === transaction.userId)?.username}</td>
                                  <td rowSpan={transaction.details.length}>{transaction.totalPrice}</td>
                                  <td rowSpan={transaction.details.length}>{transaction.count}</td>
                                  <td rowSpan={transaction.details.length}>{transaction.paymentMethod}</td>
                                </>
                              }
                              <td>{detail.tokenAddress}</td>
                              <td>{detail.toAddress}</td>
                              <td>{detail.tokenQuantity}</td>
                              <td>{detail?.hash}</td>
                            </tr>)
                        }
                      </Fragment>
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
                  // tokens?.map((token, key) => <option key={key} value={token.tokenAddress}>{token.tokenAddress}</option>)
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

export default AdminTransaction;