import React, { useReducer } from "react";

// const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// function init(initialState: number) {
//   return { count: initialState };
// }

interface Iprops {
  [k: string]: number
}

// 父组件传值: initialState
const Counter = ({ initialState }: Iprops) => {
  // 1.指定初始 state: initialState
  // const [state, dispatch] = useReducer(reducer, initialState);
  // 2.惰性初始化: init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。

  const [state, dispatch] = useReducer(reducer, initialState, (initialState) => {
    return { count: initialState };
  })

  return (
    <>
      Count: {state.count}
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </>
  );
};

export default Counter;
