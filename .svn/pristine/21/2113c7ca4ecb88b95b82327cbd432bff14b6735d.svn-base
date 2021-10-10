
import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// routes config
import routes from '../routes'
import { actionCredentialList } from '../redux/actions/credential';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = { actionCredentialList }

const TheContent = connect(mapStateToProps, mapDispatchToProps)(class extends Component {

  componentDidMount() {
    this.props.actionCredentialList();
  }

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
});

export default TheContent;