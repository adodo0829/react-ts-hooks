/**
 * useEffect 在全部渲染完毕后才会执行, 滞后于layout执行
 * useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行
 * 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
 * 
 * 可以使用它来读取 DOM 布局并同步触发重渲染
 * 在浏览器执行绘制之前 useLayoutEffect 内部的更新计划将被同步刷新
 * 尽可能使用标准的 useEffect 以避免阻塞视图更新
 */

import React, { useState, useLayoutEffect, useEffect } from "react";

function LayoutEffectComp() {
  const [color, setColor] = useState("red");

  useLayoutEffect(() => {
    alert(color);
  });

  useEffect(() => {
    console.log("color", color);
  });

  return (
    <>
      <div id="myDiv" style={{ background: color }}>
        bgColor
      </div>
      <button onClick={() => setColor("red")}>红</button>
      <button onClick={() => setColor("yellow")}>黄</button>
      <button onClick={() => setColor("blue")}>蓝</button>
    </>
  );
}

export default LayoutEffectComp;
