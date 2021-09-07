import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RecorderState {
  dateStart: string;
}

const initialState: RecorderState = {
  dateStart: "",
};

const recorderReducer = (
  state: RecorderState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.START_RECORDING:
      return { ...state, dateStart: new Date().toISOString() };
    case ActionType.STOP_RECORDING:
      return { ...state, dateStart: "" };
    default:
      return state;
  }
};

export default recorderReducer;
