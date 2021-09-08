import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action, StartRecordingAction, StopRecodingAction } from "../actions";
import { UserEvent } from "../userEvent";

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

export const loadUserEvents = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_REQUEST,
    });

    try {
      const response = await fetch("http:localhost:3001/events");
      const events: UserEvent[] = await response.json();

      dispatch({
        type: ActionType.LOAD_SUCCESS,
        payload: {
          events,
        },
      });
    } catch (error) {
      dispatch({
        type: ActionType.LOAD_FAILURE,
        payload: {
          error: "Failed to load events",
        },
      });
    }
  };
};
