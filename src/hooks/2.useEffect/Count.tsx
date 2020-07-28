import React, { useState, useEffect, FC } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Counter: FC = () => {

  const [time, setTime] = useState(0)

  // useEffect(() => {
  //   console.log('===========');
  //   let date = new Date().toTimeString()

  //   const timeID = setInterval(() => {
  //     // setTime(p => p + 1000)
  //     setTime(date)
  //   }, 1000)

  //   return () => {
  //     clearInterval(timeID)
  //   }
  // }, [time])

  useEffect(() => {
    console.log('----')
    const timerID = setInterval(() => {
      setTime(p => p + 1)
    }, 1000)

    return () => clearInterval(timerID)
  }, [])

  return (
    <p>time: {time}</p>
  )
}

const Index: FC = () => {
  // TODO: 首次渲染自动按顺序调用
  useEffect(() => {
    console.log("-----index page-----");
    // TODO: 返回一个函数用来清除作用, 组件卸载时调用
    // return () => {
    //   console.log("index page destoryed......");
    // };
    // TODO: 参数二: [state....],
    // 数组[count], 当依赖的state发生变化时，我们进行解绑, 调用return的逻辑
    // 空数组[], 组件销毁才解绑
    // 不传, 组件更新就会触发函数内部逻辑
  });
  return <h2>this is Index page</h2>;
};
const PageOne: FC = () => {
  useEffect(() => {
    console.log("-----one page-----");
  });
  return <h2>this is page one</h2>;
};
const PageTwo: FC = () => {
  useEffect(() => {
    console.log("-----two page-----");
  });
  return <h2>this is page two</h2>;
};

const Count: FC = () => {
  const [count, setCount] = useState(0);

  // 场景: ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等
  // 首次渲染,更新渲染都会调用useEffect
  useEffect(() => {
    console.log("useEffect: clicked times", count);
    return () => {
      console.log("===================");
    };
  }, [count]);

  return (
    <>
      <Counter></Counter>
      <p>the total click times: {count} </p>
      <button onClick={() => setCount(count + 1)}>click me + 1</button>

      <Router>
        <ul>
          <li>
            <Link to="/">home page</Link>
          </li>
          <li>
            <Link to="/pageone">page 1111</Link>
          </li>
          <li>
            <Link to="/pagetwo">page 2222</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/pageone" component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </Router>
    </>
  );
};

export default Count;
