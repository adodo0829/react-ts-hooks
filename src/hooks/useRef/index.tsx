import React, { useState, useEffect, useRef } from 'react'

// const refContainer = useRef(initialValue);
// useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
// 返回的 ref 对象在组件的整个生命周期内保持不变

// 1.操作Dom元素

// 2.forwardRef 可以在父组件中操作子组件的 ref 对象