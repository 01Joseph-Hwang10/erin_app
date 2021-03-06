import { combineReducers } from "redux";
import { reducer as screenReducer } from "./slices/screen";
import { reducer as navigationReducer } from "./slices/navigation";
import { reducer as appStateReducer } from "./slices/app-state";
import { reducer as editorGenericReducer } from "./slices/editor/editor-generic";
import { reducer as editorAnimationReducer } from "./slices/editor/editor-animation";
import { reducer as editorHandleReducer } from "./slices/editor/editor-handle";
import { reducer as editorLayerReducer } from "./slices/editor/editor-layer";
import { reducer as editorPublishReducer } from "./slices/editor/editor-publish";
import { reducer as editorTestReducer } from "./slices/editor/editor-test";
import { reducer as editorStatesReducer } from "@slices/editor/editor-states";

const rootReducer = combineReducers({
  screen: screenReducer,
  navigation: navigationReducer,
  appState: appStateReducer,
  editor: combineReducers({
    generic: editorGenericReducer,
    animation: editorAnimationReducer,
    handle: editorHandleReducer,
    layer: editorLayerReducer,
    publish: editorPublishReducer,
    test: editorTestReducer,
    states: editorStatesReducer
  })
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;