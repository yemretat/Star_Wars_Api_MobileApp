import React from "react";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import { Soldier } from "../../assets/images/svgimages";
import { PeopleType } from "../../types";
import styles from "./styles";
const { height, width } = Dimensions.get("window");
type CharachterProp={
  item:PeopleType
}

function index({ item }:CharachterProp) {
  return (
    <View style={styles.container}>
      <View style={styles.miniContainer}>
        <Soldier width={width * 0.1} height={width * 0.1} />
        <View style={styles.textBox}>
          <Text style={styles.charText}>{item.name}</Text>
          <Text style={styles.charText}>{item.speciesName}</Text>
        </View>
      </View>

      {item.gender == "n/a" ? (
        <Text style={styles.charText}>no gender</Text>
      ) : (
        <Text style={styles.charText}>{item.gender}</Text>
      )}
    </View>
  );
}

export default index;
