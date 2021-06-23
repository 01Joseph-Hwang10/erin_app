import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { ICON_SIZE } from "../../base/contants";

const TestAnimation: React.FC = () => {

  const renderIcon = () => (
    <Ionicons name="ios-play" size={ICON_SIZE} color="white" />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

export default TestAnimation;
