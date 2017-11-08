import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class RouteSwitch extends Component {
  render() {
    return (
      <Switch>
        {this.props.routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.content}
          />
        ))}
      </Switch>
    );
  }
}

export default RouteSwitch;