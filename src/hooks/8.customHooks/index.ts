/**
 * 自定义 Hook 更像是一种约定，而不是一种功能。
 * 如果函数的名字以 use 开头，并且调用了其他的 Hook，则就称其为一个自定义 Hook
 * 有时候我们会想要在组件之间重用一些状态逻辑，之前要么用 render props ，要么用高阶组件，要么使用 redux
 * 自定义 Hook 可以让你在不增加组件的情况下达到同样的目的
 * Hook 是一种复用状态逻辑的方式，它不复用 state 本身
 * 事实上 Hook 的每次调用都有一个完全独立的 state
 */

import { useState, useEffect } from 'react'

const useNumber = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    
    const timer = setInterval(() => {
      setNum(num => num + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return [num, setNum]
}

export default useNumber