import React from "react";

import Recorder from "../Recorder/Recorder";
import Calendar from "../Calendar/Calendar";

const App: React.FC = () => {
  return (
    <div>
      <Recorder />
      <Calendar />
    </div>
  );
};
export default App;
