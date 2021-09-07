import "./Recorder.css";
import cx from "classnames";
import { useEffect, useRef, useState } from "react";

import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";

const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

const Recorder: React.FC = () => {
  const { startRecording, stopRecording } = useActions();
  let interval = useRef<number>(0);
  const [, setCount] = useState<number>(0);

  const handleClick = () => {
    if (started) {
      window.clearInterval(interval.current);
      stopRecording();
    } else {
      startRecording();
      interval.current = window.setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  const dateStart = useTypedSelector((state) => state.recorders.dateStart);
  const started = dateStart !== "";

  let seconds = started
    ? Math.floor((Date.now() - new Date(dateStart).getTime()) / 1000)
    : 0;
  const hours = seconds ? Math.floor(seconds / 60 / 60) : 0;
  seconds -= hours * 60 * 60;
  const minutes = seconds ? Math.floor(seconds / 60) : 0;
  seconds -= minutes * 60;

  return (
    <div className={cx("recorder", { "recorder-started": started })}>
      <button onClick={handleClick} className="recorder-record">
        <span></span>
      </button>
      <div className="recorder-counter">
        {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
      </div>
    </div>
  );
};

export default Recorder;
