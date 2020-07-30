import React, { FC } from "react";

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// 可理解：在a和b的变量值不变的情况下，memoizedValue的值不变。
// 即：useMemo函数的第一个入参函数不会被执行，从而达到节省计算量的目的。
// useMemo缓存计算数据的值

export const usePrevProps = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, []);
  return ref.current;
};

const Index: FC = () => {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const calcValue = React.useMemo(() => {
    return Array(1000)
      .fill("")
      .map((v) => /*一些大量计算*/ v + 1);
      // 只有当count变量值改变的时候才会执行useMemo第一个入参的函数
  }, [count]);

  const handleCount = () => setCount((count) => count + 1);
  const handleTotal = () => setTotal(total + 1);
  const prevCalcValue = usePrevProps(calcValue);

  // console.log('prevCalcValue:', prevCalcValue);
  // console.log('calcValue:', calcValue);
  console.log("两次计算结果是否相等：", prevCalcValue === calcValue);
  return (
    <div>
      <div>Count is {count}</div>
      <div>Total is {total}</div>
      <div>
        <button onClick={handleCount}>Increment Count</button>
        <button onClick={handleTotal}>Increment Total</button>
      </div>
    </div>
  );
};

export default Index;
