import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Switch } from 'react-router';
import AppView from './AppView';
import FirstPage from './FirstPage';

const withCustomParams = component => customParams => props => {
  return (
    <React.Fragment>
      {React.cloneElement(component, { ...customParams, ...props })}
    </React.Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <AppView>
        <Switch>
          <Route exact path="/" component={withCustomParams(<Homepage />)} />
          <Route
            path="/first-page"
            component={withCustomParams(<FirstPage />)}
          />
        </Switch>
      </AppView>
    );
  }
}

export default App;
