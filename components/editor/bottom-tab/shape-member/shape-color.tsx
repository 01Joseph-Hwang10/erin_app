import React from "react";
import { useRef } from "react";
import ToggleButton from "../../base/toggle-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type ShapeColorReduxProps = ConnectedProps<typeof connector>

interface ShapeColorProps extends ShapeColorReduxProps {}

const ShapeColor: React.FC<ShapeColorProps> = ({
  iconSize
}) => {

  const icons: JSX.Element[] = []; // You need to add shape colors

  const buttonRef = useRef<ToggleButton>(null);

  const onPress = () => {
    // sth
  };

  return <ToggleButton 
    ref={buttonRef}
    onPress={onPress}
    icons={icons}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(ShapeColor);