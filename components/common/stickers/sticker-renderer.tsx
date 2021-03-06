import React from "react";
import { SvgProps } from "react-native-svg";
import { stickerTable } from "./sticker-renderer.data";


interface StickerRendererProps {
  stickerId: string | null,
  svgProps?: SvgProps,
}

class StickerRenderer extends React.Component<StickerRendererProps> {

  render = (): React.ReactNode => {
    if (this.props.stickerId) {
      const Sticker = stickerTable[this.props.stickerId][0];
  
      return <Sticker 
        {...this.props.svgProps}
      />;
    }
    
    return <></>;
  }
}

export default StickerRenderer;
