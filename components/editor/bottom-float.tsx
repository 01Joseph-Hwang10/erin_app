import { RootState } from "@redux/root-reducer";
import React from "react";
import { View, StyleSheet } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import DeleteComponent from "./bottom-float/delete-members/delete-component";
import FontColorList from "./bottom-float/picked-color-members/picked-color-list";
import FontStyleList from "./bottom-float/font-style-members/font-style-list";
import EditText from "./bottom-float/text-edit-members/edit-text";
import FontSizeSlider from "./bottom-float/font-size-members/font-size-slider";

type BottomFloatReduxProps = ConnectedProps<typeof connector>

interface BottomFloatProps extends BottomFloatReduxProps {}

class BottomFloat extends React.Component<BottomFloatProps> {

  render(): React.ReactNode {

    if (this.props.onDrag) {
      return <DeleteComponent />;
    }

    switch (this.props.bottomFloatCurrent) {
    case "deleteComponent":
      return <DeleteComponent />;
    case "colorPicker":
      return <FontColorList />;
    case "fontStyle":
      return <FontStyleList />;
    case "editText":
      return <EditText />;
    case "fontSize":
      return <FontSizeSlider />;
    default:
      return <View style={styles.root}></View>;
    }
    
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    bottomFloatCurrent: state.editor.generic.bottomFloatCurrent,
    onDrag: state.editor.handle.onDrag
  };
};

const connector = connect(mapStateToProps, {});

export default connector(BottomFloat);

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    width: "100%"
  }
});