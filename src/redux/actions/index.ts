import { ActionType } from "../action-types";
import { UserEvent } from "../userEvent";

export interface StartRecordingAction {
  type: ActionType.START_RECORDING;
}

export interface StopRecodingAction {
  type: ActionType.STOP_RECORDING;
}

export interface LoadRequestAction {
  type: ActionType.LOAD_REQUEST;
}

export interface LoadSuccessAction {
  type: ActionType.LOAD_SUCCESS;
  payload: {
    events: UserEvent[];
  };
}

export interface LoadFailureAction {
  type: ActionType.LOAD_FAILURE;
  payload: {
    error: string;
  };
}

export type Action =
  | StartRecordingAction
  | StopRecodingAction
  | LoadRequestAction
  | LoadSuccessAction
  | LoadFailureAction;
