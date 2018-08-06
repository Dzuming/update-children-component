import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Switch } from 'react-router';
import AppView from './AppView';
import FirstPage from './FirstPage';

const withAppView = component => customParams => () => {
  return (
    <React.Fragment>{React.cloneElement(component, customParams)}</React.Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <AppView>
        <Switch>
          <Route exact path="/" component={withAppView(<Homepage />)} />
          <Route path="/first-page" component={withAppView(<FirstPage />)} />
        </Switch>
      </AppView>
    );
  }
}

export default App;
