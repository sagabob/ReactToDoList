import React from "react";
import { ProgressInterface } from "../interfaces";

const ProgressItem = (props: ProgressInterface) => {
  const [progressState, setprogressState] = React.useState<number>(
    props.progress
  );

  function handleUpdateProgress(e: React.MouseEvent<HTMLButtonElement>) {
    // Prepare new todos state
    switch (e.currentTarget.innerText) {
      case "-":
        setprogressState(progressState - 1);
        break;

      case "+":
        setprogressState(progressState + 1);
        break;
    }

    props.invokeProgress(progressState);
  }

  return (
    <div>
      <button onClick={handleUpdateProgress}>-</button>
      {progressState}
      <button onClick={handleUpdateProgress}>+</button>
    </div>
  );
};

export default ProgressItem;
