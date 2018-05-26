import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { component: Component, authed, routes, ...rest } = this.props;
    const redirect_url = this.props.redirect_url
      ? this.props.redirect_url
      : '/sign-in';
    return [
      <Route
        {...rest}
        key="route"
        render={props =>
          authed === true ? (
            <Component {...Object.assign(props, { routes: routes })} />
          ) : (
            <Redirect
              to={{ pathname: redirect_url, state: { from: props.location } }}
            />
          )
        }
      />,
    ];
  }
}

PrivateRoute.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any,
  routes: PropTypes.array,
  authed: PropTypes.bool,
  redirect_url: PropTypes.string,
};
export default PrivateRoute;
