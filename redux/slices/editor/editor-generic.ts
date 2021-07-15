import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RectSpecType } from "@slices/screen";
import { Erin } from "erin";

export interface EditorGenericState {
    bottomTabCurrent: Erin.Editor.BottomTabMenuType,
    topFloatCurrent: Erin.Editor.TopFloatMenuType,
    bottomFloatCurrent: Erin.Editor.BottomFloatMenuType,
    settings: Erin.Editor.Settings,
    workspaceSpec: RectSpecType,
    hasUnsavedChanges: boolean,
    helpMessage: string | null,
}

const initialState: EditorGenericState = {
  bottomTabCurrent: "default",
  topFloatCurrent: "default",
  bottomFloatCurrent: "none",
  settings: {
    iconSize: 1,
    iconGap: 1
  },
  workspaceSpec: {
    width: 1,
    height: 1
  },
  hasUnsavedChanges: false,
  helpMessage: null
};

export type ConfigureIconLayoutInput = Erin.Editor.Settings;

const configureIconLayoutReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<ConfigureIconLayoutInput>
> = (state, { payload: settings }) => {
  state.settings = settings;
};

export type SetBottomTabCurrentInput = Erin.Editor.BottomTabMenuType

const setBottomTabCurrentReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetBottomTabCurrentInput>
> = (state, { payload: bottomTabCurrent }) => {
  state.bottomTabCurrent = bottomTabCurrent;
};

export type SetTopFloatCurrentInput = Erin.Editor.TopFloatMenuType

const setTopFloatCurrentReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetTopFloatCurrentInput>
> = (state, { payload: topFloatCurrent }) => {
  state.topFloatCurrent = topFloatCurrent;
};

export type SetBottomFloatCurrentInput = Erin.Editor.BottomFloatMenuType

const setBottomFloatCurrentReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetBottomFloatCurrentInput>
> = (state, { payload: bottomFloatCurrent }) => {
  state.bottomFloatCurrent = bottomFloatCurrent;
};

export type SetWorkspaceSpecInput = RectSpecType

const setWorkspaceSpecReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetWorkspaceSpecInput>
> = (state, { payload: workspaceSpec }) => {
  state.workspaceSpec = workspaceSpec;
};

export type SetHasUnsavedChanges = boolean

const setHasUnsavedChangesReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetHasUnsavedChanges>
> = (state, { payload: hasUnsavedChanges }) => {
  state.hasUnsavedChanges = hasUnsavedChanges;
};

export type SetHelpMessageInput = string | null

const setHelpMessageReducer: CaseReducer<
  EditorGenericState,
  PayloadAction<SetHelpMessageInput>
> = (state, { payload: newHelpMessage }) => {
  state.helpMessage = newHelpMessage;
};

export const {
  reducer,
  actions: {
    configureIconLayout,
    setBottomTabCurrent,
    setTopFloatCurrent,
    setBottomFloatCurrent,
    setWorkspaceSpec,
    setHasUnsavedChanges,
    setHelpMessage
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    configureIconLayout: configureIconLayoutReducer,
    setBottomTabCurrent: setBottomTabCurrentReducer,
    setTopFloatCurrent: setTopFloatCurrentReducer,
    setBottomFloatCurrent: setBottomFloatCurrentReducer,
    setWorkspaceSpec: setWorkspaceSpecReducer,
    setHasUnsavedChanges: setHasUnsavedChangesReducer,
    setHelpMessage: setHelpMessageReducer
  }
});