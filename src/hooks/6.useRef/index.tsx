import React, { useState, useEffect, useRef, FC, Component } from "react";
import Refshare from './ref'
// const refContainer = useRef(initialValue);
// useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
// 返回的 ref 对象在组件的整个生命周期内保持不变, 也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个

// 1.操作Dom元素
// 2.forwardRef 可以在父组件中操作子组件的 ref 对象

// useRef的作用
// 获取DOM元素的节点: 操作自己和子元素(子元素通过const ChildRef = React.forwardRef(Child)传递)
// 获取子组件的实例: (子组件为class类组件)
// 渲染周期之间共享数据的存储 (通过给useRef返回的对象赋值, 设置成全局的变量, 跨多个effect来控制他)

// 操作子组件
const Child = (props:any, ref:any) => {
  return (
      <>
        <input type="text" ref={ref} />
      </>
  )
}

const Child1 = React.forwardRef(Child)

const Parent: FC = () => {
  const [number, setNumber] = useState(0)
  const childInstance = useRef() as any
  const inputRef = useRef() as any
  useEffect(() => {
    console.log(childInstance);
  }, [])

  function getFocus(){
    inputRef.current.value = 'focus';
    inputRef.current.focus();
    console.log(inputRef);
  }

  function handleClick() {
    setNumber(number + 1 )
    getFocus()
  }

  return (
    <>
      <Child1 ref={inputRef} />
      <ChildRef ref={childInstance} />
      <p>{number}</p>
      <button onClick={handleClick}>++++</button>
      <Refshare />
    </>
  );
};


// let input:any



// 因为函数组件没有实例，如果想用ref获取子组件的实例，子组件组要写成类组件
class ChildRef extends Component {
  handleLog = () => {
    console.log('Child Component');
  }
  render() {
    return (
      <div>
        xxx
      </div>
    )
  }
}

export default Parent;
