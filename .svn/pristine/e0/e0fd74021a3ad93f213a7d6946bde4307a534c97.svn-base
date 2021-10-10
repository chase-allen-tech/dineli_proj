import React, { useRef, useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { Button, Form, Input, Layout, Select } from "element-react"
import Fade from "react-reveal/Fade"
import { useDispatch, useSelector } from 'react-redux';
import { actionUserUpdate } from "../../redux/actions/user";

const rules = {
    citizen: [{ required: true, message: 'This field is required', trigger: 'blur' }],
    walletAddress: [{ required: true, message: 'This field is required', trigger: 'blur' }],
    email: [{ required: true, message: 'This field is required', trigger: 'blur' }],
    username: [{ required: true, message: 'This field is required', trigger: 'blur' }],
    phone: [{ required: true, message: 'This field is required', trigger: 'blur' }],
};

const citizenOptions = [
    { key: 0, label: "No" },
    { key: 1, label: "Yes" }
];

const activeOptions = [
    { key: 0, label: "No" },
    { key: 1, label: "Yes" }
];

const roleOptions = [
    { key: 1, label: "USER" },
    { key: 2, label: "MODERATOR" },
    { key: 3, label: "ADMIN" }
];

const typeOptions = [
    { key: 1, label: "BASIC" },
    { key: 2, label: "GOLD" },
    { key: 3, label: "PREMIUM" },
];

const AdminUserUpdate = props => {
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        console.log('update user', user);
        setImgFile(user.card);
        if (user.role)
            setForm({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                phone: user.phone,
                email: user.email,
                citizen: Number(user.citizen),
                isActive: user.isActive ? 1 : 0,
                walletAddress: user.walletAddress,
                role: roleOptions.find(role => role.label === user.role[0]).key,
                type: user.type
            });
    }, [user]);

    const [form, setForm] = useState({
        
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const formRef = useRef();
    const [imgFile, setImgFile] = useState(user.card);

    const onFormChange = (key, value) => {
        let formClone = Object.assign({}, form);
        formClone[key] = value;
        // console.log('onformchange', value);
        setForm(formClone);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        formRef.current.validate(valid => {
            // if (!valid || !imgFile) return false;

            let payload = Object.assign({}, form);
            payload.id = user.id;
            dispatch(actionUserUpdate(payload));
            history.push('/admin/users');
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
                                    <div className="ms-3">User Detail</div>
                                    <div className="ms-auto me-3 d-flex align-items-center">
                                        <img src="imgs/logo3.png" alt='logo' style={{ height: "35px" }} />
                                    </div>
                                </div>
                            </Layout.Col>
                        </Layout.Row>


                        <div className="container-fluid">
                            <h3 className="my-3 text-white">User Highlights</h3>
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <div className=" zoom-image bg-white d-flex rounded justify-content-center align-items-center position-relative overflow-hidden d-inline-block w-100 bg-image hover-zoom" style={{ height: '100%', zIndex:"5" }}>
                                        {
                                            imgFile ? <img src={`${process.env.REACT_APP_API_ENDPOINT}/public/${imgFile}`} className="w-100 h-100 img-thumbnail" alt="img"  /> : <img src="imgs/empty.png" className="w-100 h-100 img-thumbnail" alt="img" />
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <Form.Item label="First name" prop="firstname">
                                        <Input type="text" value={form.firstname} onChange={val => onFormChange('firstname', val)} />
                                    </Form.Item>
                                    <Form.Item label="Last name" prop="lastname">
                                        <Input type="text" value={form.lastname} onChange={val => onFormChange('lastname', val)} />
                                    </Form.Item>
                                    <Form.Item label="User name" prop="username">
                                        <Input type="text" value={form.username} onChange={val => onFormChange('username', val)} />
                                    </Form.Item>
                                </div>
                                <div className="col-md-4 mt-4">
                                    <Form.Item label="Phone" prop="phone">
                                        <Input type="text" value={form.phone} onChange={val => onFormChange('phone', val)} />
                                    </Form.Item>
                                </div>

                                <div className="col-md-4 mt-4">
                                    <Form.Item label="email" prop="email">
                                        <Input type="email" value={form.email} onChange={val => onFormChange('email', val)} />
                                    </Form.Item>
                                </div>
                                <div className="col-md-2 mt-4">
                                    <Form.Item label="Citizen" prop="citizen">
                                        <Select className="w-100" value={form.citizen} onChange={val => onFormChange('citizen', val)}>
                                            {
                                                citizenOptions.map(item => <Select.Option value={item.key} label={item.label}>{item.label}</Select.Option>)
                                            }
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div className="col-md-2 mt-4">
                                    <Form.Item label="Active" prop="squareFeet">
                                        <Select className="w-100" value={form.isActive} onChange={val => onFormChange('isActive', val)}>
                                            {
                                                activeOptions.map(item => <Select.Option value={item.key} label={item.label}>{item.label}</Select.Option>)
                                            }
                                        </Select>
                                    </Form.Item>
                                </div>
                                {/*       -------------          new row       --------------      */}
                                <div className="col-md-8 mt-4">
                                    <Form.Item label="Wallet address" prop="walletAddress">
                                        <Input type="text" value={form.walletAddress} onChange={val => onFormChange('walletAddress', val)} />
                                    </Form.Item>
                                </div>
                                <div className="col-md-2 mt-4">
                                    <Form.Item label="Role" prop="neighborhood">
                                        <Select className="w-100" value={form.role} onChange={val => onFormChange('role', val)}>
                                            {
                                                roleOptions.map(item => <Select.Option value={item.key} label={item.label}>{item.label}</Select.Option>)
                                            }
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div className="col-md-2 mt-4">
                                    <Form.Item label="Type" prop="neighborhood">
                                        <Select className="w-100" value={form.type} onChange={val => onFormChange('type', val)}>
                                            {
                                                typeOptions.map(item => <Select.Option value={item.key} label={item.label}>{item.label}</Select.Option>)
                                            }
                                        </Select>
                                    </Form.Item>
                                </div>

                            </div>
                        </div>

                        <Form.Item style={{ textAlign: "center" }}>
                            <Button type="primary" nativeType="submit" onClick={onSubmit}>Update</Button>
                        </Form.Item>
                    </Form>
                </Fade>
            </div>
        </div>
    )
}

export default AdminUserUpdate;