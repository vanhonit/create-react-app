import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import PrivateRoute from 'Components/Routes/PrivateRoute';
import PublicRoute from 'Components/Routes/PublicRoute';
import routes from 'routes';

class AppRoutes extends React.Component {
  static propTypes = {
    history: PropTypes.any,
    authenticated: PropTypes.bool,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      pathname: '',
    };
  }

  render() {
    const authenticated = false;
    let privateRoute = null;
    let publicRoute = null;
    let match = null;
    for (let i = 0; i < routes.length; i++) {
      match = matchPath(this.props.location.pathname, {
        path: routes[i].path,
        exact: true,
        sensitive: routes[i].component.sensitive,
      });
      if (match) {
        if (routes[i].private) {
          privateRoute = routes[i];
        } else {
          publicRoute = routes[i];
        }
      }
    }
    if (privateRoute) {
      return (
        <PrivateRoute
          authed={authenticated}
          component={privateRoute.component}
          // routes={route.routes}
          exact
          path={privateRoute.path}
          key={'private'}
        />
      );
    }
    if (publicRoute) {
      return (
        <PublicRoute
          authed={authenticated}
          component={publicRoute.component}
          // routes={route.routes}
          exact
          path={publicRoute.path}
          key={'private'}
        />
      );
    }
    return <Redirect to="/" />;
  }
}

export default withRouter(AppRoutes);
