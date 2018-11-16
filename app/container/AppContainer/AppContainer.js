import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  ScrollView
} from "react-native";

import ImageList from "../../components/ImageList/ImageList";
import BigPhoto from "../../components/BigPhoto/BigPhoto";
import Input from "../../components/Input/Input";

import { fetchPhotos } from "../../redux/actions/actions";
import { connect } from "react-redux";

import PropTypes from "prop-types";

class AppContainer extends Component {
  state = {
    photoSelected: false,
    selectedObj: null,
    searchTerm: "pussy"
  };

  componentDidMount() {
    this.props.fetchPhotos(this.state.searchTerm);
  }

  componentDidUpdate() {
    if (this.state.searchTerm.length > 0) {
      this.props.fetchPhotos(this.state.searchTerm);
      this.setState({
        searchTerm: ""
      });
    }
  }
  thumbClickHandler = index => {
    const selected = Object.create(this.props.data.data[index]);
    this.setState({
      photoSelected: true,
      selectedObj: selected
    });
  };

  fallBack = () => {
    this.setState({
      photoSelected: false,
      selectedObj: null
    });
  };
  InputHandler = text => {
    this.setState({
      searchTerm: text
    });
    this.render();
  };
  render() {
    let errMsg = "";
    let content = "";
    this.state.photoSelected
      ? (content = (
          <BigPhoto data={this.state.selectedObj} click={this.fallBack} />
        ))
      : (content = (
          <ImageList
            data={this.props.data.data}
            thumbClickHandler={this.thumbClickHandler}
          />
        ));
    if (this.props.data.error) errMsg = this.props.data.error;
    return (
      <ScrollView style={styles.container}>
        <Text>{errMsg}</Text>
        <Input InputHandler={this.InputHandler} />
        <View style={styles.thumbsContainer}>{content}</View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "rgb(58, 64, 94)"
  },
  thumbsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(58, 64, 94)"
  }
});

AppContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(AppContainer);
