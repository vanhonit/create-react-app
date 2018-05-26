import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PublicRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { component: Component, authed, external, ...rest } = this.props;
    return [
      <Route
        {...rest}
        key="route"
        render={props => {
          return <Component {...props} {...rest} />;
        }}
      />,
    ];
  }
}
PublicRoute.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any,
  authed: PropTypes.bool,
  external: PropTypes.bool,
};
export default PublicRoute;
