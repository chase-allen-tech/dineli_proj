import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import DashboardSvg from '../assets/svg/menu-dashboard.svg'
import DashboardOnSvg from '../assets/svg/menu-dashboard-on.svg'
import PropertySvg from '../assets/svg/menu-bulk.svg'
import PropertyOnSvg from '../assets/svg/menu-bulk-on.svg'
import CampaignSvg from '../assets/svg/menu-campaign.svg'
import CampaignOnSvg from '../assets/svg/menu-campaign-on.svg'
import SpotlightSvg from '../assets/svg/menu-spotlight.svg'
import SpotlightOnSvg from '../assets/svg/menu-spotlight-on.svg'
import SettingSvg from '../assets/svg/menu-setting.svg'
import SettingOnSvg from '../assets/svg/menu-setting-on.svg'
import HealthSvg from '../assets/svg/menu-health.svg'
import HealthOnSvg from '../assets/svg/menu-health-on.svg'
import ActivitySvg from '../assets/svg/menu-activity.svg'
import ActivityOnSvg from '../assets/svg/menu-activity-on.svg'
import ReferralSvg from '../assets/svg/menu-referral.svg'
import ReferralOnSvg from '../assets/svg/menu-referral-on.svg'
import CommunitySvg from '../assets/svg/menu-community.svg'
import CommunityOnSvg from '../assets/svg/menu-community-on.svg'
import LogoutSvg from '../assets/svg/menu-logout.svg'
import MarketSvg from '../assets/svg/menu-market.svg'
import MarketOnSvg from '../assets/svg/menu-market-on.svg'
import { Link, NavLink, withRouter } from 'react-router-dom'

import { actionAuthLogout } from '../redux/actions/auth';

const menu = [
  {
    groupName: 'MAIN',
    groupKey: 'main',
    groupItems: [
      { key: 'dashboard', to: '/admin/dashboard', name: 'Dashboard', icon: DashboardSvg, iconActive: DashboardOnSvg },
      { key: 'site_settings', to: '/admin/site_settings', name: 'Site Settings', icon: CampaignSvg, iconActive: CampaignOnSvg },
      { key: 'properties', to: '/admin/properties', name: 'Properties', icon: PropertySvg, iconActive: PropertyOnSvg },
      { key: 'tokens', to: '/admin/tokens', name: 'Tokens', icon: HealthSvg, iconActive: HealthOnSvg },
      { key: 'users', to: '/admin/users', name: 'Users', icon: SpotlightSvg, iconActive: SpotlightOnSvg },
      { key: 'teams', to: '/admin/teams', name: 'Teams', icon: CommunitySvg, iconActive: CommunityOnSvg },
      { key: 'faqs', to: '/admin/faqs', name: 'Faqs', icon: MarketSvg, iconActive: MarketOnSvg },
      { key: 'blogs', to: '/admin/blogs', name: 'Blogs', icon: ReferralSvg, iconActive: ReferralOnSvg },
      { key: 'transaction', to: '/admin/transaction', name: 'Transaction', icon: ReferralSvg, iconActive: ReferralOnSvg }
    ]
  },
  {
    groupName: 'ACCOUNT',
    groupKey: 'account',
    groupItems: [
      { key: 'email', to: '/admin/email', name: 'Email', icon: SettingSvg, iconActive: SettingOnSvg },
      { key: 'log', to: '/admin/log', name: 'Log', icon: ActivitySvg, iconActive: ActivityOnSvg },
    ]
  }
]

class AdminSidebar extends Component {

  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.actionAuthLogout();
    localStorage.removeItem('user');
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="position-sticky top-0 d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white vh-100 min-vh-100 overflow-auto">
        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">
            <Link to="/home">
              <img className="img-mobile" src="imgs/logo.png" width="100" alt="Logo" />
            </Link>
          </span>
        </div>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
          {
            menu.map(group => <Fragment key={group.groupKey}>
              <div className="text-muted fw-bold c-sidebar-group-name">{group.groupName}</div>
              {
                group.groupItems.map(item => <Fragment key={item.key}>
                  <NavLink to={item.to} className="nav-link align-middle p-0 c-sidenav-item w-100" activeClassName="c-sidenav-active">
                    <div className="d-flex p-1 rounded my-1">
                      <img src={item.icon} width="17" className="c-sidenav-icon" alt="icon" />
                      <img src={item.iconActive} width="17" style={{ display: 'none' }} className="c-sidenav-icon-active" alt="img" />
                      <div className="ms-3 d-none d-sm-inline">{item.name}</div>
                    </div>
                  </NavLink>
                </Fragment>)
              }
            </Fragment>)
          }

          <li className="nav-item">
            <div className="nav-link align-middle px-0">
              <img src={LogoutSvg} width="17" alt="img" />
              <span className="ms-3 d-none d-sm-inline"><button className="btn btn-sm btn-outline-secondary" onClick={this.onLogoutClick}>Sign out</button></span>
            </div>
          </li>

        </ul>

      </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminSidebar));