import React, { FC } from "react";
import useNumber from "./index";

const Counter1: FC = () => {
  // 每个组件调用同一个 hook，只是复用 hook 的状态逻辑，并不会共用一个状态
  const [num, setNum] = useNumber() as any;

  return (
    <div className="xxx">
      <button onClick={() => setNum(0) }>
        {num}
      </button>
    </div>
  );
};

export default Counter1;
