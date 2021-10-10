import React, { useEffect } from "react"
import { Button, Layout } from "element-react"
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade"
import { Table as TableBs, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { actionPropertyList, actionPropertyGet } from "../../redux/actions/property";

const AdminProperty = props => {
  let history = useHistory();
  const dispatch = useDispatch();
  const properties = useSelector(state => state.property.propertyData);

  useEffect(() => {
    // if(!properties)
    dispatch(actionPropertyList());
  }, [])
  const onNewClicked = () => {

  }

  const onPropertyClicked = (e, index) => {
    // console.log('index', index);
    dispatch(actionPropertyGet(index));
    history.push('/admin/properties/update');
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: '80%' }}>
        <Fade bottom delay={200}>
          <h1 style={{ textAlign: "center" }} className='d-font-bold d-text-90 d-white'>Properties</h1>
          <div className="d-flex">
            <Link to="/admin/properties/new" className="ms-auto">
              <Button type="outlined" onClick={onNewClicked}>New Property</Button>
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
                    <th className="bg-secondary">Image</th>
                    <th className="bg-secondary" style={{ minWidth: 100 }}>Address 1</th>
                    <th className="bg-secondary" style={{ minWidth: 100 }}>Address 2</th>
                    <th className="bg-secondary" style={{ minWidth: 100 }}>Start Date</th>
                    <th className="bg-secondary" style={{ minWidth: 200 }}>Monthly Rent Per Token</th>
                    <th className="bg-secondary" style={{ minWidth: 110 }}>Token Value</th>
                    <th className="bg-secondary" style={{ minWidth: 150 }}>Generated Token</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Property Type</th>
                    <th className="bg-secondary" style={{ minWidth: 100 }}>Neighborhood</th>
                    <th className="bg-secondary" style={{ minWidth: 140 }}>Bed Room/Bath</th>
                    <th className="bg-secondary" style={{ minWidth: 170 }}>Monthly Gross Rent</th>
                    <th className="bg-secondary" style={{ minWidth: 130 }}>Monthly Costs</th>
                    <th className="bg-secondary">Taxes</th>
                    <th className="bg-secondary">Basic</th>
                    <th className="bg-secondary">Gold</th>
                    <th className="bg-secondary">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    properties.map((item, key) =>
                      <tr key={key} onClick={(e) => onPropertyClicked(e, item.id)}>
                        <td>{key + 1}</td>
                        <td>
                          <Carousel indicators={true} >
                            {item.imageData?.map((img) => (
                              <Carousel.Item interval={2000} key={img}>
                                <img src={`${process.env.REACT_APP_API_ENDPOINT}/public/${img}`} alt="img" width="100" height="100%" />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        </td>
                        <td>{item.address1}</td>
                        <td>{item.address2}</td>
                        <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(item.rentStartsDate))}</td>
                        <td>${item.monthlyRentPerToken}</td>
                        <td>${item.tokenValue}</td>
                        <td>{item.generatedToken}</td>
                        <td>{item.propertyType}</td>
                        <td>{item.neighborhood}</td>
                        <td>{item.bedroomOrBath}</td>
                        <td>${item.monthlyGrossRent}</td>
                        <td>${item.monthlyCosts}</td>
                        <td>${item.tax}</td>
                        <td>{item.basic}</td>
                        <td>{item.gold}</td>
                        <td>{item.premium}</td>
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

export default AdminProperty;