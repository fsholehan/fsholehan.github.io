import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";

const RateBox = ({ message, linkText, linkUrl }) => {
  const handlePress = () => {
    if (linkUrl) {
      Linking.openURL(linkUrl);
    }
  };

  return (
    <View className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 my-2 shadow-md">
      <Text className="text-black text-base mb-2">{message}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text className="text-blue-600 font-semibold underline">{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateBox;
