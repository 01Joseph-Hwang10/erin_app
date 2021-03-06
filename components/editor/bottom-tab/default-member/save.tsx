import React from "react";
import { Feather } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";

type SaveReduxProps = ConnectedProps<typeof connector>

interface SaveProps extends SaveReduxProps {}

const Save: React.FC<SaveProps> = ({
  iconSize,
  popAtEditor
}) => {

  const renderIcon = () => (
    <Feather name="save" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    popAtEditor();
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    bottomFloatHelpMessage={"편지지의 작업상황을 저장합니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    popAtEditor: state.navigation.popAtEditor
  };
};

const connector = connect(mapStateToProps, { });

export default connector(Save);
