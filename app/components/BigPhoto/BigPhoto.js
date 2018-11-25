import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
const BigPhoto = props => {
  return (
    <TouchableOpacity onPress={props.click}>
      <View>
        <Image
          style={styles.ImageStyle}
          source={{ uri: props.data.urls.regular }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    width: 400,
    height: 700
  }
});

export default BigPhoto;
