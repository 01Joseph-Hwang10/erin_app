import { 
  setBottomFloatHelpMessage, 
  SetBottomFloatHelpMessageInput, 
} from "@slices/editor/editor-generic";
import React, { Component } from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps, Options } from "react-redux";
import { Dispatch } from "redux";

type SwitchButtonReduxProps = ConnectedProps<typeof connector>

interface SwitchButtonProps extends SwitchButtonReduxProps {
    itemKeys: string[],
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined,
    icon: () => JSX.Element,
}

interface SwitchButtonState {
    itemIndex: number
}

export class SwitchButton extends Component<SwitchButtonProps, SwitchButtonState> {

    public state: SwitchButtonState = {
      itemIndex: 0
    }

    public toggleItem = (): void => {
      if ( this.state.itemIndex + 1 === this.props.itemKeys.length ) {
        this.setState({ itemIndex: 0 });
      } else {
        this.setState({ itemIndex: this.state.itemIndex + 1 });
      }
    }

    public setItemIndex = (itemIndex: number): void => {
      this.setState({ itemIndex });
    }
    
    // private onPress = () => {
    //   if (this.props.onPress) {
    //     this.props.onPress();
    //   }
    // }

    componentDidUpdate = (_: SwitchButtonProps, prevState: SwitchButtonState): void => {
      if ( prevState.itemIndex !== this.state.itemIndex ) {
        this.props.setBottomFloatHelpMessage(this.props.itemKeys[this.state.itemIndex]);
      }
    }

    render(): React.ReactNode {

      const Icon = this.props.icon;

      return (
        <TouchableOpacity
          onPress={this.props.onPress}
        >
          <Icon />
        </TouchableOpacity>
      );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomFloatHelpMessage: (payload: SetBottomFloatHelpMessageInput) => dispatch(setBottomFloatHelpMessage(payload)),
});

const options: Options = {
  forwardRef: true
};
  
const connector = connect(null, mapDispatchToProps, null, options);

export default connector(SwitchButton);
