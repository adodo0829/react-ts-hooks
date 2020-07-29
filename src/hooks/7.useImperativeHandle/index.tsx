// useImperativeHandle可以让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛
// 在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用
// 父组件可以使用操作子组件中的多个 ref
import React, { useRef, forwardRef, useEffect, useImperativeHandle } from "react";

function Child(props: any, parentRef: any) {
  // 子组件内部自己创建 ref
  let focusRef = useRef() as any;
  let inputRef = useRef() as any;
  useImperativeHandle(parentRef, () => {
    // 这个函数会返回一个对象
    // 该对象会作为父组件 current 属性的值
    // 通过这种方式，父组件可以使用操作子组件中的多个 ref
    return {
      focusRef,
      inputRef,
      name: "计数器",
      focus() {
        focusRef.current.focus();
      },
      changeText(text: string) {
        inputRef.current.value = text;
      },
    };
  });

  return (
    <>
      <input ref={focusRef} />
      <input ref={inputRef} />
    </>
  );
}

const ForwardChild = forwardRef(Child);

function Parent() {
  const parentRef = useRef() as any; //{current:''}
  function getFocus() {
    parentRef.current.focus();

    // 因为子组件中没有定义这个属性addNumber，实现了保护，所以这里的代码无效
    // parentRef.current.addNumber(666); // error

    parentRef.current.changeText("<script>alert(1)</script>");
    console.log(parentRef.current.name);
  }

  useEffect(() => {
    console.log(parentRef);
  }, [])

  return (
    <>
      <ForwardChild ref={parentRef} />
      <button onClick={getFocus}>获得焦点</button>
    </>
  );
}

export default Parent