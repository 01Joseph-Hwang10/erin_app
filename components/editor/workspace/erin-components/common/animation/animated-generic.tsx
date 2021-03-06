import { Erin } from "erin";
import React from "react";
import Blink from "./blink";
import Fade from "./fade";
import Moving from "./moving";

interface AnimatedGenericProps {
  children?: React.ReactNode,
  animationType: Erin.Common.NonableGeneralAnimationTypes,
  infinite?: boolean
}

const AnimatedGeneric: React.FC<AnimatedGenericProps> = ({
  children,
  animationType,
  infinite
}) => {
  switch (animationType) {
  case "blink":
    return <Blink
      infinite={infinite}
    >
      {children}
    </Blink>;
  case "fade":
    return <Fade
      infinite={infinite}
    >
      {children}
    </Fade>;
  case "moving":
    return <Moving
      infinite={infinite}
    >
      {children}
    </Moving>;
  case "bounce":
    return <Moving
      infinite={infinite}
      movement={"bounce"}
    >
      {children}
    </Moving>;
  default:
    return <>
      {children}
    </>;
  }
};

export default AnimatedGeneric;