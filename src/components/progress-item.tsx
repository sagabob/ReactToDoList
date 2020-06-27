import React from "react";
import { TodoProgressInterface, ProgressInterface } from "../interfaces";

const ProgressItem = (props: TodoProgressInterface) => {
  const [progressState, setprogressState] = React.useState<ProgressInterface>(
    props.progress
  );

  function handleUpdateProgress(e: React.MouseEvent<HTMLButtonElement>) {
    // Prepare new todos state
    switch (e.currentTarget.innerText) {
      case "-":
        progressState.progress = progressState.progress - 1;
        setprogressState(progressState);
        break;

      case "+":
        progressState.progress = progressState.progress + 1;
        setprogressState(progressState);
        break;
    }
  }

  return (
    <div>
      <button onClick={handleUpdateProgress}>-</button>
      {progressState.progress}
      <button onClick={handleUpdateProgress}>+</button>
    </div>
  );
};

export default ProgressItem;
