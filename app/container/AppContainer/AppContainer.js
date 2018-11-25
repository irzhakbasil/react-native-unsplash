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

import { fetchPhotos, selectPhoto, searchTermUpdater, deselectPhoto } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import PropTypes from "prop-types";

class AppContainer extends Component {

  componentDidMount() {
    this.props.fetchPhotos(this.props.searchTerm);
    console.log(this.props)
  }

  componentDidUpdate() {
    if (this.props.searchTerm.length > 0) {
      this.props.fetchPhotos(this.props.searchTerm);
      this.props.searchTermUpdater('');
    }
    let x = {
      error: this.props.error,
      photoSelected: this.props.photoSelected,
      searchTerm: this.props.searchTerm
    }
    console.log(x)
  }

  thumbClickHandler = index => {
    const selected = {
        ...this.props.data[index]
    }
    this.props.selectPhoto(selected);
  };

  fallBack = () => {
    this.props.deselectPhoto();
  };

  InputHandler = text => {
    this.props.searchTermUpdater(text)
  };

  render() {
    let errMsg = "";
    let content = "";
    this.props.photoSelected
      ? (content = (
          <BigPhoto data={this.props.selectedObj} click={this.fallBack} />
        ))
      : (content = (
          <ImageList
            InputHandler={this.InputHandler}
            data={this.props.data}
            thumbClickHandler={this.thumbClickHandler}
          />
        ));
    if (this.props.error) errMsg = this.props.error;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.error}>{errMsg}</Text>
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
  },
  error: {
    color: "red",
    margin: 20,
    textAlign: 'center',
    fontSize: 25
  }
});

AppContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    selectedObj: state.selectedObj,
    photoSelected: state.photoSelected,
    searchTerm: state.searchTerm
  };
};

function mapDisatchToPops(dispatch){
  return bindActionCreators({ 
      fetchPhotos: fetchPhotos,
      selectPhoto: selectPhoto,
      searchTermUpdater: searchTermUpdater,
      deselectPhoto: deselectPhoto
    }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDisatchToPops
)(AppContainer);
