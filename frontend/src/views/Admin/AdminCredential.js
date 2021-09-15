import React, { useState, useRef, useEffect } from "react"
import { Button, Form, Input, Layout } from "element-react"
import Fade from "react-reveal/Fade"
import { useDispatch, useSelector } from "react-redux";
import { actionCredentialUpdate } from "../../redux/actions/credential";

const rules = {
  blockchainId: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  infuraProjectEndpoint: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  walletPublicKey: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  walletPrivateKey: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  paypalAppClientId: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  coinbaseApiKey: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  hellosignApiKey: [{ required: true, message: 'This field is required', trigger: 'blur' }],
  hellosignClientId: [{ required: true, message: 'This field is required', trigger: 'blur' }],
};

const AdminCredentialNew = props => {

  const dispatch = useDispatch();
  const formRef = useRef();
  const credentials = useSelector(state => state.credential.credentialData);

  const [form, setForm] = useState({
    id: null,
    blockchainId: null,
    infuraProjectEndpoint: null,
    walletPublicKey: null,
    walletPrivateKey: null,
    paypalAppClientId: null,
    coinbaseApiKey: null,
    hellosignApiKey: null,
    hellosignClientId: null
  });

  useEffect(() => {
    if (credentials.length) {
      const curr = credentials[0];
      setForm({
        id: curr.id,
        blockchainId: curr.blockchainId.toString(),
        infuraProjectEndpoint: curr.infuraProjectEndpoint,
        walletPublicKey: curr.walletPublicKey,
        walletPrivateKey: curr.walletPrivateKey,
        paypalAppClientId: curr.paypalAppClientId,
        coinbaseApiKey: curr.coinbaseApiKey,
        hellosignApiKey: curr.hellosignApiKey,
        hellosignClientId: curr.hellosignClientId
      })
    }
  }, [credentials]);

  const onFormChange = (key, value) => {
    let formClone = Object.assign({}, form);
    formClone[key] = value;
    setForm(formClone);
  }

  const onSubmit = () => {
    formRef.current.validate(valid => {
      if (!valid) return;
      let payload = {
        id: form.id,
        blockchainId: form.blockchainId,
        infuraProjectEndpoint: form.infuraProjectEndpoint,
        walletPublicKey: form.walletPublicKey,
        walletPrivateKey: form.walletPrivateKey,
        paypalAppClientId: form.paypalAppClientId,
        coinbaseApiKey: form.coinbaseApiKey,
        hellosignApiKey: form.hellosignApiKey,
        hellosignClientId: form.hellosignClientId
      }

      dispatch(actionCredentialUpdate(payload));
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
                  <div className="ms-3">Credential Detail</div>
                  <div className="ms-auto me-3 d-flex align-items-center">
                    <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                  </div>
                </div>
              </Layout.Col>
            </Layout.Row>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <Form.Item label="Blockchain ID" prop="blockchainId">
                    <Input type="number" value={form.blockchainId} onChange={val => onFormChange('blockchainId', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-9">
                  <Form.Item label="Infura Project URL Endpoint" prop="infuraProjectEndpoint">
                    <Input value={form.infuraProjectEndpoint} onChange={val => onFormChange('infuraProjectEndpoint', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Wallet Public Key" prop="walletPublicKey">
                    <Input value={form.walletPublicKey} onChange={val => onFormChange('walletPublicKey', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Wallet Private Key" prop="walletPrivateKey">
                    <Input value={form.walletPrivateKey} onChange={val => onFormChange('walletPrivateKey', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Paypal App Client ID" prop="paypalAppClientId">
                    <Input value={form.paypalAppClientId} onChange={val => onFormChange('paypalAppClientId', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Coinbase API Key" prop="coinbaseApiKey">
                    <Input value={form.coinbaseApiKey} onChange={val => onFormChange('coinbaseApiKey', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Hellosign API Key" prop="hellosignApiKey">
                    <Input value={form.hellosignApiKey} onChange={val => onFormChange('hellosignApiKey', val)} autoComplete="off" />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <Form.Item label="Hellosign Client ID" prop="hellosignClientId">
                    <Input value={form.hellosignClientId} onChange={val => onFormChange('hellosignClientId', val)} autoComplete="off" />
                  </Form.Item>
                </div>

                <div className="col-md-12">
                  <Form.Item style={{ textAlign: "center" }}>
                    <Button type="success" onClick={onSubmit}>Update</Button>
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

export default AdminCredentialNew;