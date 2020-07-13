import React, { useState, ChangeEvent, useEffect, InputHTMLAttributes, FormEventHandler } from "react";

// 自定义hook: 函数useFunction, 内部调用了其他hook
// 抽离一部分公共逻辑, 返回相关操作和状态

interface IForm {
  username: string;
  password: string;
}

// 抽离表单值改变的逻辑: 事件回调的赋值操作
/**
 * 表单操作的hook
 * @param formData
 */
function useForm(formData: IForm) {
  const [form, setForm] = useState(formData)

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return {form, handleForm}
}


function Tool() {
  // useEffect
  useEffect(() => {
    // componentDidMount
    console.log('come');
    const focusOnInput = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        (document.querySelector('input[name="username"]') as any).focus()
      }
    }

    window.addEventListener('keyup', focusOnInput)
    // componentWillUnmount
    return () => {
      window.removeEventListener('keyup', focusOnInput)
      console.log('leave');
    }
  }, []) // 只有依赖数组内部state发生变化, 函数才会重新执行; 
         // []不会重复执行, 只在组件挂载和卸载时执行

  return (
    <p>工具人</p>
  )
}

// 每次form state变化, 组件会重新渲染
function UseState() {
  const data: IForm = {username: 'appleguard', password: 'xxx'}
  // 这里如用数组的形式解构出来, form为联合类型
  const {form, handleForm}= useForm(data)
  const [showTool, setShowTool] = useState(false)
  
  useEffect(() => {
    console.log('state change');
    // do http request
    // then setData
  })

  return (
    <>
      <div>
        <span>username: </span>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleForm}
        />
      </div>
      <div>
        <span>password: </span>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleForm}
        />
      </div>

      <section>
        <button onClick={() => setShowTool(!showTool)}>click tool</button>
        { showTool ? <Tool /> : void 0 }
      </section>
    </>
  );
}

export default UseState;
