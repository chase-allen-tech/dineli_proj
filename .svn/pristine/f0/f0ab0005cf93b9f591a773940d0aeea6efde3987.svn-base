import React, { useEffect } from "react"
import { Button, Layout } from "element-react"
import Fade from "react-reveal/Fade"
import { Table as TableBs } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { actionTokenList } from "../../redux/actions/token";
import { useDispatch, useSelector } from "react-redux";
import { actionPropertyList } from "../../redux/actions/property";
import { actionUserList } from '../../redux/actions/user';

const AdminToken = props => {

  const dispatch = useDispatch();

  const tokens = useSelector(state => state.token.tokenData);
  const properties = useSelector(state => state.property.propertyData);
  const users = useSelector(state => state.user.userData);

  useEffect(() => {
    dispatch(actionTokenList());
    dispatch(actionPropertyList());
    dispatch(actionUserList());
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Tokens</h1>
          <div className="d-flex">
            <Link to="/admin/tokens/new" className="ms-auto">
              <Button type="outlined">New Token</Button>
            </Link>
          </div>
          <div className="login-ruleForm mt-4" labelPosition={"top"} style={{ border: "2px solid #03ffa4", borderRadius: "10px 10px 0 0" }}>
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
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Property</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Token Name</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>User</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Purchase Price</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Quantity</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Sale Price</th>
                    <th className="bg-secondary">Token Address</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tokens.map((token, key) =>
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{properties.find(p => p.id === token.propertyId)?.address1 }</td>
                        <td>{token.tokenSymbol}</td>
                        <td>{users.find(u => u.id === token.userId)?.username }</td>
                        <td>{token.purchasePrice}</td>
                        <td>{token.quantity}</td>
                        <td>{token.salePrice}</td>
                        <td>{token.tokenAddress}</td>
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

export default AdminToken;