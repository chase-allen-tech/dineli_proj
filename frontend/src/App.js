import React, {Component} from 'react'
import './assets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter, Switch, Route} from "react-router-dom"
import GetAccess from "./views/GetAccess"

import {i18n} from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import {Provider} from "react-redux"
import {Store} from "./redux/store"

i18n.use(locale)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'))
const TheAdminLayout = React.lazy(() => import('./containers/TheAdminLayout'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"/>
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <React.Suspense fallback={loading}>
          <HashRouter>
            <Switch>
              <Route path="/get-access" component={GetAccess}/>
              <Route path="/admin">
                <TheAdminLayout/>
              </Route>
              <Route>
                <TheLayout/>
              </Route>
            </Switch>
          </HashRouter>
        </React.Suspense>
      </Provider>
    )
  }
}

export default App;