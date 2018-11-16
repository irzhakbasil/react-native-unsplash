import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./app/container/AppContainer/AppContainer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import photosReducer from "./app/redux/reducers/photosReducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(photosReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
