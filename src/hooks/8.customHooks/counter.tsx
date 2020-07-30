import React, { FC } from "react";
import useNumber from "./index";
import { usePrevProps } from '../9.useMemo/memo';

const Counter: FC = () => {
  // 每个组件调用同一个 hook，只是复用 hook 的状态逻辑，并不会共用一个状态
  const [num, setNum] = useNumber();

  // const v = usePrevProps(111)
  // console.log('usePrevProps:', v);

  return (
    <div className="xxx">
      <button>
        {num}
      </button>
    </div>
  );
};

export default Counter;
