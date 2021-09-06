import { combineReducers } from "redux";
import userEventsReducer from "./userEventsReducer";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
