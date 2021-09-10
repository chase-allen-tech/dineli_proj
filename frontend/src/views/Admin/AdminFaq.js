import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout } from "element-react"
import Fade from "react-reveal/Fade"
import { Table as TableBs } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { actionFaqList } from "../../redux/actions/faq";

const AdminFaq = props => {

  const dispatch = useDispatch();

  const faqs = useSelector(state => state.faq.faqData);

  console.log(faqs);

  useEffect(() => {
    dispatch(actionFaqList());
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Faqs</h1>
          <div className="d-flex">
            <Link to="/admin/faqs/new" className="ms-auto">
              <Button type="outlined">New Faq</Button>
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
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Title</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    faqs.map((item, key) =>
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
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

export default AdminFaq;