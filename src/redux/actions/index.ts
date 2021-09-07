import { ActionType } from "../action-types";

export interface StartRecordingAction {
  type: ActionType.START_RECORDING;
}

export interface StopRecodingAction {
  type: ActionType.STOP_RECORDING;
}

export type Action = StartRecordingAction | StopRecodingAction;
