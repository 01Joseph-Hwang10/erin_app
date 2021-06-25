import React from "react";
import PressButton from "../base/press-button";
import { RootState } from "../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import CircularFrame from "../../common/circular-frame";
import { Text } from "react-native";

type TogglePagesReduxProps = ConnectedProps<typeof connector>

interface TogglePagesProps extends TogglePagesReduxProps {}

const TogglePages: React.FC<TogglePagesProps> = ({
  currentPage,
  iconSize
}) => {

  const renderIcon = () => (
    <CircularFrame
      size={iconSize}
      border={true}
      borderColor={"grey"}
      borderWidth={2.5}
      backgroundColor={"purple"}
      shadow={true}
      shadowLevel={4}
    >
      <Text>{currentPage.toString()}</Text>
    </CircularFrame>
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    currentPage: state.editor.currentPage,
    iconSize: state.editor.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

export default connector(TogglePages);
