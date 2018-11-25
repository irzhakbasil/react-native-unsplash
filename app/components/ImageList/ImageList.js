import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Input from '../Input/Input'

const ImageList = props => {
  let img = null;
  if (props.data) {
    img = props.data.map((el, index) => {
      let oddEvenStyle = '';
      index % 2 === 0? oddEvenStyle = {backgroundColor: "rgb(58, 54, 94)", borderRadius: 7} : oddEvenStyle = { backgroundColor: "rgb(58, 74, 94)", borderRadius: 7}
      return (
        <TouchableOpacity 
          style = {oddEvenStyle}
          onPress={() => props.thumbClickHandler(index)}
          key={el.id}
        >
          <View style={styles.container}>
            <Image source={{ uri: el.urls.thumb }} style={styles.ImageStyle} />
            <View>
              <Text style={{ color: "#ccc", fontWeight: "bold", marginTop: 10}}>
              {el.description} 
              </Text>
              <Text style={{ color: "#ccc", fontSize: 12, margin: 0}}>
                {el.user.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
  return (
    <View style={styles.wrapper}>
      <Input InputHandler={props.InputHandler} />
      <View>{img}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 7
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    borderRadius: 7,
    width: 150,
    height: 150
  }
});
export default ImageList;
