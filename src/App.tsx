import React, { useState } from "react";
import LoginForm from "./hooks/useState/index";
import "./styles/app.less";

function App() {
  const [value, setValue] = useState(1);

  return (
    <>
      <h1>useState</h1>

      <section>
        <div className="single">
          <button
            onClick={() => {
              setValue(value + 1);
            }}
          >
            click me
          </button>
          <span style={{ paddingLeft: '10px' }}>{ value }</span>
        </div>

        <div className="object">
          <h3>自定义hook</h3>
          <LoginForm />
        </div>
      </section>

      <section></section>
    </>
  );
}

export default App;
