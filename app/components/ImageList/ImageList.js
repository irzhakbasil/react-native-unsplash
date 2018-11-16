import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const ImageList = props => {
  let img = null;
  if (props.data) {
    img = props.data.map((el, index) => {
      return (
        <TouchableOpacity
          onPress={() => props.thumbClickHandler(index)}
          key={el.id}
        >
          <View style={styles.container}>
            <Image source={{ uri: el.urls.thumb }} style={styles.ImageStyle} />
            <Text style={{ color: "#ccc", fontWeight: "bold", marginTop: 10 }}>
              {el.user.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  }
  return (
    <View className="thumbs-wrapper">
      <View className="thumbs-container">{img}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 7
  },
  ImageStyle: {
    borderRadius: 7,
    width: 250,
    height: 250
  }
});
export default ImageList;
