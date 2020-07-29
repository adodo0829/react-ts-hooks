import React, { useState } from "react";
import LoginForm from "./hooks/1.useState/index";
import "./styles/app.less";
import Effect from './hooks/2.useEffect/index'
import Counter from './hooks/5.useReducer/iindex'
import ThemeColor from './hooks/4.useContext/index'
import LayoutEffect from './hooks/3.useLayoutEffect/index'
import Ref from './hooks/6.useRef/index'
import ImperativeHandleRef from './hooks/7.useImperativeHandle'

function App() {
  const [value, setValue] = useState(1);

  return (
    <>
      <h3>1.useState</h3>

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

      <section>
        <h3>2.useEffect</h3>
        <Effect />
      </section>

      <section>
        <h3>3.useContext</h3>
        <ThemeColor />
      </section>

      <section>
        <h3>4.useReducer</h3>
        <Counter initialState={0} />
      </section>

      <section>
        <h3>5.useLayoutEffect</h3>
        <LayoutEffect />
      </section>

      <section>
        <h3>6.useRef</h3>
        <Ref />
      </section>

      <section>
        <h3>7.useImperativeHandle</h3>
        <ImperativeHandleRef />
      </section>
    </>
  );
}

export default App;
