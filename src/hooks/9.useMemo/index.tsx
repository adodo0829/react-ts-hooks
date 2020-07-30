import React, { FC, useState } from "react";

// 优化1: Object.is()
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

// Hook 内部使用 Object.is 来比较新/旧 state 是否相等(当都是相同对象时（意味着每个对象有同一个引用）)
// 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
// useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果

// 优化2: 
// 默认情况，只要父组件状态变了（不管子组件依不依赖该状态），子组件也会重新渲染
// 一般的优化：

// 类组件：可以使用 pureComponent ；
// 函数组件：使用 React.memo ，将函数组件传递给 memo 之后，就会返回一个新的组件，
// 新组件的功能：如果接受到的属性不变，则不重新渲染函数；

const Index: FC = () => {
  const [counter, setCounter] = useState({ name: "计数器", number: 0 });
  console.log("render Counter", counter);
  // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
  return (
    <>
      <p>
        {counter.name}:{counter.number}
      </p>
      <button
        onClick={() => setCounter({ ...counter, number: counter.number + 1 })}
      >
        +
      </button>
      <button onClick={() => setCounter(counter)}>++</button>
    </>
  );
};
export default Index;
