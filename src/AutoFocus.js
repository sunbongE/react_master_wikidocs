import { useEffect, useRef } from 'react'

export default function AutoFocus() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []) // [] :  컴포넌트가 '마운트'될 때 딱 한 번만 실행

  const loginAlert = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} type="text" placeholder="id"/>
        <button onClick={loginAlert}>Login</button>
      </header>
  </div>
  );
}
