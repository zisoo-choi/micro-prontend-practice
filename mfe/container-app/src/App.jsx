import React, { useEffect, useRef } from "react";
import { mount } from 'vueModuleApp/Sample';

// App 함수 (화살표 함수 -> 리액트 컴포넌트를 나타냄)
const App = () => {
  const ref = useRef(null)

  // useEffect를 사용하여 컴포넌트가 마운트되었을 때 한 번 실행되는 효과를 정의한다.
  useEffect(() => {
    // 아래 코드는 해당 <div ref={ref} /> 에 대한 참조를 가리킨다.
    mount(ref.current);
  }, []);

  return (
    // react 애플리케이션의 root 요소
    <div style=
        {{ margin: '10px', padding: '10px', textAlign: 'center', backgroundColor: 'cyan'}}>
      <h1>React - container-app</h1>
      {/*
        ref는 <div> 요소를 가리키고 있는 것이다.
        가리키는 이유로는 Vue.js 앱을 해당 div 요소에 마운트(연결) 하기 위해서 이다.
      */}
      <div ref={ref} />
      <h2>테스트</h2>
    </div>
  )
};

export default App;