import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import {Route, BrowserRouter as Router } from 'react-router-dom';

import store from './store/configureStore'
import './App.css';
import { KanbanPage } from './pages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={KanbanPage}/>
              </Switch>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
