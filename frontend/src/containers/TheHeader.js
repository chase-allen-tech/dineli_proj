import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  actionAuthLogout,
} from '../redux/actions/auth'

class TheHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: false,
      role: 'user'
    }
    this.onClickedLogout = this.onClickedLogout.bind(this)
  }
  componentDidMount() {
    this.setState({
      logged: this.props.logged,
      role: this.props.user ? this.props.user['roles'][0] : ''
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
    this.props.actionAuthLogout()
  }
  render() {
    return (
      <Navbar expand="lg" style={{ margin: "0% 12% 0% 12%" }}>
        <Navbar.Brand href="#home">
          <img className="img-mobile" src="imgs/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="img-mobile" aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: 'auto' }}>
            <div className="deskContent" style={{ position: 'absolute', marginTop: -48, marginLeft: '7rem' }}>
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
            </div>
            <Nav.Link href="#marketplace">
              <div className="d-white d-font-book d-text-nav">
                MARKETPLACE
              </div>
            </Nav.Link>
            <Nav.Link href="#sell-tokens">
              <div className="d-white d-font-book d-text-nav">
                SELL TOKENS
              </div>
            </Nav.Link>
            <Nav.Link href="#team">
              <div className="d-white d-font-book d-text-nav">
                TEAM
              </div>
            </Nav.Link>
            <Nav.Link href="#learn">
              <div className="d-white d-font-book d-text-nav">
                LEARN
              </div>
            </Nav.Link>
            <Nav.Link href="#faq">
              <div className="d-white d-font-book d-text-nav">
                FAQ
              </div>
            </Nav.Link>
            <Nav.Link href="#blog">
              <div className="d-white d-font-book d-text-nav">
                BLOG
              </div>
            </Nav.Link>
            {
              this.state.logged && (
                <>
                  <Nav.Link href="#my-account" className="deskContent">
                    <Link to={`/cart`}>
                      <img className="img-mobile" src="imgs/header/myaccount.png" alt="cart"
                        style={{ position: 'absolute', marginTop: -18, marginLeft: '2rem' }} />
                      <label className="d-text-28 d-font-bold d-white"
                        style={{ position: 'absolute', marginTop: -20, marginLeft: '2.8rem' }}>5</label>
                    </Link>
                    <div className="d-white d-font-bold d-text-nav" id='navbar-my-account'
                      style={{ position: 'absolute', marginTop: -48, marginRight: 10, width: 'fit-content' }}>MY ACCOUNT
                        <div className="position-relative h-100"
                        style={{
                          background: "#000",
                          width: 240,
                          left: -80,
                          display: "none",
                          border: '1px solid gray'
                        }}
                        id="navbar-my-account-children">
                        <Nav.Link href="#calculator">
                          <div className="d-highlight d-font-bold d-text-nav">CALCULATOR</div>
                        </Nav.Link>
                        <Nav.Link href="#affiliate-dashboard">
                          <div className="d-highlight d-font-bold d-text-nav">AFFILIATE DASHBOARD</div>
                        </Nav.Link>
                        {
                          this.state.role === 'ADMIN' &&
                          <Nav.Link href="#admin/dashboard">
                            <div className="d-highlight d-font-bold d-text-nav">ADMIN</div>
                          </Nav.Link>
                        }

                        <Nav.Link onClick={this.onClickedLogout}>
                          <div className="d-highlight d-font-bold d-text-nav">Log Out</div>
                        </Nav.Link>
                      </div>
                    </div>
                  </Nav.Link>

                  <Nav.Link href="#my-account" className="phoneContent">
                    <div className="d-white d-font-book d-text-nav" style={{ background: "#212926" }}>MY ACCOUNT
                      <Nav.Link href="#calculator">
                        <div className="d-highlight d-font-bold d-text-nav"
                          style={{
                            width: 'fit-content'
                          }}>CALCULATOR
                        </div>
                      </Nav.Link>
                      <Nav.Link href="#affiliate-dashboard">
                        <div className="d-highlight d-font-bold d-text-nav"
                          style={{
                            width: 'fit-content'
                          }}>AFFILIATE DASHBOARD
                        </div>
                      </Nav.Link>
                      <Nav.Link href="#admin/product/edit">
                        <div className="d-highlight d-font-bold d-text-nav"
                          style={{
                            width: 'fit-content'
                          }}>PROPERTY Edit(ADMIN)
                        </div>
                      </Nav.Link>
                      <Nav.Link onClick={this.onClickedLogout}>
                        <div className="d-highlight d-font-bold d-text-nav"
                          style={{
                            width: 'fit-content'
                          }}>
                          Log Out
                        </div>
                      </Nav.Link>
                    </div>
                  </Nav.Link>
                </>
              )
            }
            {
              !this.state.logged && (
                <Nav.Link href="#my-account" className="deskContent">
                  <div className="d-white d-font-bold d-text-nav" id='navbar-my-account'
                    style={{ position: 'absolute', marginTop: -48, width: 'fit-content' }}>
                    Sign In
                  </div>
                </Nav.Link>
              )
            }
            {
              !this.props.logged && (
                <Nav.Link href="#my-account" className="phoneContent">
                  <div className="d-white d-font-book d-text-nav">Sign In</div>
                </Nav.Link>
              )
            }
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
export default connect(mapStateToProps, mapDispatchToProps)(TheHeader)