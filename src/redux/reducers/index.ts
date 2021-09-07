import { combineReducers } from "redux";
import userEventsReducer from "./userEventsReducer";
import recorderReducer from "./recorderReducer";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorders: recorderReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
