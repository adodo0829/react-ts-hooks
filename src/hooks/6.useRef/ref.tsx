import React, { FC, useEffect, useState, useRef } from "react";
const Index: FC = () => {
  const [count, setCount] = useState(0);
  // 把定时器设置成全局变量使用useRef挂载到current上
  const timer = useRef() as any;
  console.log(timer);

  // 首次加载useEffect方法执行一次设置定时器
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  // count每次更新都会执行这个副作用，当count > 5时，清除定时器
  useEffect(() => {
    if (count > 5) {
      clearInterval(timer.current);
    }
  });
  return <h6>count: {count}</h6>;
};
export default Index;
