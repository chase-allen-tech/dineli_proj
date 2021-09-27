import React from 'react'
import Register from "./views/Register"

const Home = React.lazy(() => import('./views/Home/index'))
const MarketPlace = React.lazy(() => import('./views/Marketplace/index'))
const SellTokens = React.lazy(() => import('./views/SellTokens/index'))
const Team2 = React.lazy(() => import('./views/Team2/index'))
const Learn = React.lazy(() => import('./views/Learn/index'))
const FAQ = React.lazy(() => import('./views/FAQ/index'))
const Affiliate = React.lazy(() => import('./views/Affiliate/index'))
const MyAccount = React.lazy(() => import('./views/MyAccount/index'))
const LostPassword = React.lazy(() => import('./views/LostPassword/index'))
const Verification = React.lazy(() => import('./views/Verification/index'))
const Login = React.lazy(() => import('./views/Login'))
const Calculator = React.lazy(() => import('./views/Calculator'))
const Detail = React.lazy(() => import('./views/Detail'))
const LogRegister = React.lazy(() => import('./views/Admin/LogRegister'));
const Cart = React.lazy(() => import('./views/Cart'))
const HouseEditor = React.lazy(() => import('./views/Admin/HouseEditor'))
const Checkout = React.lazy(() => import('./views/Checkout'))
const AffiliateDashboard = React.lazy(() => import('./views/AffiliateDashboard'))

const AdminDashboard = React.lazy(() => import('./views/Admin/AdminDashboard'));
const AdminSiteSetting = React.lazy(() => import('./views/Admin/AdminSiteSetting'));
const AdminProperty = React.lazy(() => import('./views/Admin/AdminProperty'));
const AdminPropertyNew = React.lazy(() => import('./views/Admin/AdminPropertyNew'));
const AdminPropertyUpdate = React.lazy(() => import('./views/Admin/AdminPropertyUpdate'));
const AdminToken = React.lazy(() => import('./views/Admin/AdminToken'));
const AdminTokenNew = React.lazy(() => import('./views/Admin/AdminTokenNew'));
const AdminUser = React.lazy(() => import('./views/Admin/AdminUser'));
const AdminTransaction = React.lazy(() => import('./views/Admin/AdminTransaction')) ;
const AdminUserNew = React.lazy(() => import('./views/Admin/AdminUserNew'));
const AdminTeam = React.lazy(() => import('./views/Admin/AdminTeam'));
const AdminTeamNew = React.lazy(() => import('./views/Admin/AdminTeamNew'));
const AdminFaq = React.lazy(() => import('./views/Admin/AdminFaq'));
const AdminFaqNew = React.lazy(() => import('./views/Admin/AdminFaqNew'));
const AdminBlog = React.lazy(() => import('./views/Admin/AdminBlog'));
const AdminBlogNew = React.lazy(() => import('./views/Admin/AdminBlogNew'));
const AdminEmail = React.lazy(() => import('./views/Admin/AdminEmail'));
const AdminLog = React.lazy(() => import('./views/Admin/AdminLog'));
const AdminCredential = React.lazy(() => import('./views/Admin/AdminCredential'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/marketplace', name: 'MarketPlace', component: MarketPlace },
  { path: '/sell-tokens', name: 'SellTokens', component: SellTokens },
  { path: '/team', name: 'Team2', component: Team2 },
  { path: '/learn', name: 'Learn', component: Learn },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/affiliate', name: 'Affiliate', component: Affiliate },
  { path: '/my-account/lost-password', name: 'LostPassword', component: LostPassword },
  { path: '/my-account', name: 'MyAccount', exact: true, component: MyAccount },
  { path: '/verify/:verificationString', name: 'Verify Account', component: Verification },
  { path: '/calculator', name: 'Calculator', component: Calculator},
  { path: '/detail/:productID', name: 'Detail', component: Detail },
  { path: '/affiliate-dashboard', name: 'AffiliateDashboard', component: AffiliateDashboard },
  { path: '/cart/:productID', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },

  // =========================admin pages==============================
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/admin/site_settings', name: 'AdminSiteSetting', component: AdminSiteSetting },
  { path: '/admin/properties', name: 'AdminProperty', component: AdminProperty, exact: true },
  { path: '/admin/properties/new', name: 'AdminPropertyNew', component: AdminPropertyNew, exact: true },
  { path: '/admin/properties/update', name: 'AdminPropertyUpdate', component: AdminPropertyUpdate, exact: true },
  { path: '/admin/tokens', name: 'AdminToken', component: AdminToken, exact: true },
  { path: '/admin/tokens/new', name: 'AdminTokenNew', component: AdminTokenNew, exact: true },
  { path: '/admin/users', name: 'AdminUser', component: AdminUser, exact: true },
  { path: '/admin/users/new', name: 'AdminUserNew', component: AdminUserNew, exact: true },
  { path: '/admin/teams', name: 'AdminTeam', component: AdminTeam, exact: true },
  { path: '/admin/teams/new', name: 'AdminTeamNew', component: AdminTeamNew, exact: true },
  { path: '/admin/faqs', name: 'AdminFaq', component: AdminFaq, exact: true },
  { path: '/admin/faqs/new', name: 'AdminFaqNew', component: AdminFaqNew, exact: true },
  { path: '/admin/blogs', name: 'AdminBlog', component: AdminBlog, exact: true },
  { path: '/admin/blogs/new', name: 'AdminBlogNew', component: AdminBlogNew, exact: true },
  { path: '/admin/email', name: 'AdminEmail', component: AdminEmail },
  { path: '/admin/log', name: 'AdminLog', component: AdminLog },
  { path: '/admin/transaction', name: 'AdminTransaction', component: AdminTransaction },
  { path: '/admin/credential', name: 'AdminCredential', component: AdminCredential },

  { path: '/admin/product/edit', name: 'HouseEditor', component: HouseEditor },
  { path: '/admin', name: 'LogRegister', component: LogRegister },
]

export default routes
