import {useEffect, useState} from "react"

function App() {
	const [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      // do fetch
      console.log(number);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    // 依赖这里会有个警告
  }, []);

  return <button onClick={() => setNumber((c) => c + 1)}>点击{number}次</button>;
}

export default App
