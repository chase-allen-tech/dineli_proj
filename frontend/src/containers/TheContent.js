
import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// routes config
import routes from '../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class TheContent extends Component {

  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/get-access" />
          </Switch>
        </Suspense>
      </HashRouter>
    )
  }
}

export default TheContent;