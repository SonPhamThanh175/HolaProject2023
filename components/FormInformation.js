import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { colors } from "../constants";

const FormInformation = ({ lable, title }) => {
  return (
    <View
      style={{
        height: 45,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth:0.5,
        marginBottom:8,
        borderColor:colors.DARKGRAY
      }}
    >
      <Text style={{ fontWeight: "600", color:colors.DARKGRAY }}>{title} </Text>
      <Text style={{color:colors.GRAY}}>{lable}</Text>
    </View>
  );
};

export default FormInformation;
