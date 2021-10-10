import React, { useState, useEffect, useRef } from "react"
import { Button, Checkbox, Form, Input, Layout, Select } from "element-react"
import Fade from "react-reveal/Fade"
import { useDispatch, useSelector } from "react-redux";
import { actionPropertyList } from "../../redux/actions/property";
import { actionTokenCreate } from "../../redux/actions/token";
import { useHistory } from "react-router-dom";

const rules = {
  property: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  tokenAddress: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  tokenSymbol: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  purchasePrice: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  quantity: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  salePrice: [{ required: true, message: 'This field is required', trigger: 'blur' }],
};

const AdminTokenNew = props => {

  const dispatch = useDispatch();
  const history = useHistory();
  const formRef = useRef();
  const properties = useSelector(state => state.property.propertyData);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(actionPropertyList());
  }, []);

  const [form, setForm] = useState({
    property: '',
    user: '',
    tokenAddress: '',
    tokenSymbol: '',
    purchasePrice: 0,
    quantity: 0,
    salePrice: 0,
    status: false
  });

  // console.log('[prop]', form.status);

  const onFormChange = (key, value) => {
    setForm({ ...form, [key]: value });
  }

  const onSubmit = () => {
    formRef.current.validate(valid => {
      if(!valid) return;
      let payload = {
        userId: user.id,
        propertyId: properties.find(p => p.address1 == form.property).id,
        tokenAddress: form.tokenAddress,
        tokenSymbol: form.tokenSymbol,
        purchasePrice: form.purchasePrice,
        salePrice: form.salePrice,
        quantity: form.quantity,
        status: form.status,
      }

      // let payload = Object.assign({}, form);
      dispatch(actionTokenCreate(payload));
      history.push('/admin/tokens');
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
                  <div className="ms-3">Token Detail</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <Form.Item label="Property" prop="property">
                    <Select className="w-100" value={form.property} onChange={val => onFormChange('property', val)}>
                      {
                        properties.map(item => <Select.Option value={item.address1}>{item.address1}</Select.Option>)
                      }
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item label="User" prop="user">
                    <Input type="user" value={user.username} autoComplete="off" disabled />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item label="Token Address" prop="tokenAddress">
                    <Input value={form.tokenAddress} onChange={val => onFormChange('tokenAddress', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-6">
                  <Form.Item label="Token Symbol" prop="tokenSymbol">
                    <Input value={form.tokenSymbol} onChange={val => onFormChange('tokenSymbol', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-4">
                  <Form.Item label="Purchase Price" prop="purchasePrice">
                    <Input type="number" value={form.purchasePrice} onChange={val => onFormChange('purchasePrice', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-4">
                  <Form.Item label="Sale Price" prop="salePrice">
                    <Input type="number" value={form.salePrice} onChange={val => onFormChange('salePrice', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-4">
                  <Form.Item label="Quantity" prop="quantity">
                    <Input type="number" value={form.quantity} onChange={val => onFormChange('quantity', val)} />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Status" prop="status">
                    <Checkbox checked={form.status} onChange={val => onFormChange('status', val)} />
                  </Form.Item>
                </div><div className="col-md-12">

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

export default AdminTokenNew;