import React, { Component } from 'react'

import { Navbar, Nav, NavDropdown, Button, Dropdown } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  actionAuthLogout,
} from '../redux/actions/auth'

class TheHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: false,
      role: 'user',
      cartCount: 0,
    }
    this.onClickedLogout = this.onClickedLogout.bind(this)
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    this.setState({
      logged: this.props.logged,
      role: user ? user.roles[0] : '',
      cartCount: cartProducts ? cartProducts.length : 0
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (props.logged !== state.logged) {
      return {
        logged: props.logged,
      }
    }
    return null
  }
  onClickedAffiliate() {
    window.location.href = "#affiliate";
  }
  onClickedLogout(e) {
    e.preventDefault()
    this.props.actionAuthLogout();
    localStorage.removeItem('user');
    this.props.history.push('/home');
    window.location.reload();
  }
  render() {
    return (
      <Navbar expand="lg" className="container">
        <Navbar.Brand href="#home">
          <img className="img-mobile" src="imgs/logo.png" alt="Logo" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle className="img-mobile" aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: 'auto', flexDirection: 'column' }}>
            <div className="deskContent ms-auto">
              <Button className="d-font-bold d-text-nav" style={{ width: 192 }}
                onClick={() => this.onClickedAffiliate()}>Affiliate Program</Button>
              <div style={{ width: 12 }} />
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic"
                  className="d-font-book d-text-nav"
                  style={{ width: 192, borderRadius: 8 }}>
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Chinese</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {
                this.state.logged && (
                  <div className="ms-2">
                    <div className="deskContent align-items-center h-100">
                      <div className="d-white d-font-bold d-text-nav position-relative hover-bg-dark trans-2 p-2 cursor-pointer" id='navbar-my-account' style={{ zIndex: 1 }}>
                        <div>MY ACCOUNT</div>
                        <div className="position-absolute bg-dark d-none border border-1 border-secondary" style={{ minWidth: 220, right: 0, top: 40, height: 'fit-content' }} id="navbar-my-account-children">
                          {
                            this.state.role === 'ADMIN' ?
                              <Nav.Link href="#admin/dashboard">
                                <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2 px-1">ADMIN</div>
                              </Nav.Link>
                              :
                              <Nav.Link href="#my-account">
                                <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2 px-1">ACCOUNT</div>
                              </Nav.Link>
                          }

                          <Nav.Link href="#calculator">
                            <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2 px-1">CALCULATOR</div>
                          </Nav.Link>
                          <Nav.Link href="#affiliate-dashboard">
                            <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2 px-1">AFFILIATE DASHBOARD</div>
                          </Nav.Link>


                          <Nav.Link onClick={this.onClickedLogout}>
                            <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2 px-1">LOGOUT</div>
                          </Nav.Link>
                        </div>
                      </div>
                    </div>

                    <div className="phoneContent">
                      <div className="d-white d-font-book d-text-nav" style={{ background: "#212926" }}>MY ACCOUNT
                        <Nav.Link href="#calculator">
                          <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2"
                            style={{
                              width: 'fit-content'
                            }}>CALCULATOR
                          </div>
                        </Nav.Link>
                        <Nav.Link href="#affiliate-dashboard">
                          <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2"
                            style={{
                              width: 'fit-content'
                            }}>AFFILIATE DASHBOARD
                          </div>
                        </Nav.Link>
                        <Nav.Link href="#admin/product/edit">
                          <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2"
                            style={{
                              width: 'fit-content'
                            }}>PROPERTY Edit(ADMIN)
                          </div>
                        </Nav.Link>
                        <Nav.Link onClick={this.onClickedLogout}>
                          <div className="d-highlight d-font-bold d-text-nav hover-bg-dark trans-2"
                            style={{
                              width: 'fit-content'
                            }}>
                            Log Out
                          </div>
                        </Nav.Link>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                !this.state.logged && (
                  <Nav.Link href="#my-account" className="deskContent">
                    <div className="d-white d-font-bold d-text-nav hover-bg-dark trans-2 px-1" id='navbar-my-account'
                      style={{ width: 'fit-content' }}>
                      Sign In
                    </div>
                  </Nav.Link>
                )
              }
              {
                !this.props.logged && (
                  <Nav.Link href="#my-account" className="phoneContent">
                    <div className="d-white d-font-book d-text- hover-bg-dark trans-2 px-1">Sign In</div>
                  </Nav.Link>
                )
              }
            </div>

            <div className="d-flex ms-auto">
              <Nav.Link href="#marketplace">
                <div className="d-white d-font-book d-text-nav hover-bg-dark trans-2 px-1">
                  MARKETPLACE
                </div>
              </Nav.Link>
              <Nav.Link href="#sell-tokens">
                <div className="d-white d-font-book d-text-nav hover-bg-dark trans-2 px-1">
                  SELL TOKENS
                </div>
              </Nav.Link>
              <Nav.Link href="#team">
                <div className="d-white d-font-book d-text-nav hover-bg-dark trans-2 px-1">
                  TEAM
                </div>
              </Nav.Link>
              <Nav.Link href="#learn">
                <div className="d-white d-font-book d-text-nav hover-bg-dark trans-2 px-1">
                  LEARN
                </div>
              </Nav.Link>
              <Nav.Link href="#faq">
                <div className="d-white d-font-book d-text-nav hover-bg-dark trans-2 px-1">
                  FAQ
                </div>
              </Nav.Link>
              <Nav.Link href="#blog">
                <div className="d-white d-font-book d-text-nav hover-bg-dark trans-2 px-1">
                  BLOG
                </div>
              </Nav.Link>
              <Link to={`/cart/null`}>
                <div className="position-relative">
                  <img className="img-mobile ms-2" src="imgs/header/myaccount.png" alt="cart" />
                  <label className="d-text-28 d-font-bold d-white position-absolute" style={{ top: 0, left: 25 }}>{this.state.cartCount}</label>
                </div>
              </Link>
            </div>


            <Nav.Link href="#affiliate" className="phoneContent">
              <div className="d-white d-font-book d-text-nav">AFFILIATE PROGRAM</div>
            </Nav.Link>
            <NavDropdown title={<span className="d-white d-font-book d-text-nav">LANGUAGE: English</span>}
              className="phoneContent">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Chinese</NavDropdown.Item>
              <NavDropdown.Item>Russian</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  const { logged, user } = state.auth
  return {
    logged, user
  }
}
const mapDispatchToProps = {
  actionAuthLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TheHeader));