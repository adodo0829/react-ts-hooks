import React, { FC, useCallback, useRef, useEffect } from "react";
import { usePrevProps } from '../9.useMemo/memo';
// const memoizedCallback = useCallback(
//   () => {
//     doSomething(a, b);
//   },
//   [a, b],
// );

// 在a和b的变量值不变的情况下，memoizedCallback的引用不变。
// 即：useCallback的第一个 入参函数 会被缓存，从而达到渲染性能优化的目的。
// useCallback缓存的是函数引用

// const usePrevProps = (value: any) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     ref.current = value;
//   });

//   return ref.current;
// };

const Index: FC = () => {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  // 每次组件渲染时这个handleCount都是重新创建的一个新函数
  // const handleCount = () => setCount(count + 1);

  // 此时使用useCallback来缓存了函数，依赖项(deps)是一个空数组它代表这个函数在组件的生成周期内会永久缓存
  const handleCount = useCallback(() => setCount(count => count + 1), []);
  const handleTotal = () => setTotal(total + 1);
  const prevHandleCount = usePrevProps(handleCount);

  console.log(prevHandleCount, handleCount);
  console.log("两次处理函数是否相等：", prevHandleCount === handleCount);

  return (
    <div>
      <div>Count is {count}</div>
      <div>Total is {total}</div>
      <br />
      <div>
        <button onClick={handleCount}>Increment Count</button>
        <button onClick={handleTotal}>Increment Total</button>
      </div>
    </div>
  );
};
export default Index;
