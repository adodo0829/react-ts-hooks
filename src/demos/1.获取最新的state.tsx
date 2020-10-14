import React, { FC , useRef, useState, useEffect} from "react";

const Index: FC = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([0])
  const saveData = useRef<any>()

  useEffect(() => {
    setData([...data, count])
  }, [count])

  console.log('count:', count);

  return (
    <div>
      <p>{ count }</p>
      <button onClick={() => {  }}>点我啊+1</button>
      <button onClick={() => {
        setCount(count+1); saveData.current = count + 1
        console.log(data, count, saveData)
      }}>getData</button>
    </div>
  )
};
export default Index;
