import { ActionType } from "../action-types";
import { StartRecordingAction, StopRecodingAction } from "../actions";

export const startRecording = (): StartRecordingAction => {
  return {
    type: ActionType.START_RECORDING,
  };
};

export const stopRecording = (): StopRecodingAction => {
  return {
    type: ActionType.STOP_RECORDING,
  };
};
