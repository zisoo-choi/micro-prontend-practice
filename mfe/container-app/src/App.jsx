import React, { useEffect, useRef } from "react";
import { mount } from 'vueModuleApp/Sample';

// App 함수
const App = () => {
  const ref = useRef(null)

  // useEffect를 사용하여 컴포넌트가 마운트되었을 때 한 번 실행되는 효과를 정의한다.
  useEffect(() => {
    /*
      mount 함수를 호출하여
      vue 마이크로 프론트엔드 애플리케이션을
      ref.currend에 저장된 DOM 요소에 마운트합니다.
      이를 통해 vue 애플리케이션을 react 애플리케이션에 통합합니다.
    */
    mount(ref.current);
    // 빈 배열 []을 두 번째 인자로 전달하여 의존성이 없음을 나타낸다.
  }, []);

  return (
    // react 애플리케이션의 root 요소
    <div style=
        {{ margin: '10px', padding: '10px', textAlign: 'center', backgroundColor: 'cyan'}}>
      <h1>React - container-app</h1>
       
      {/*
        아래 코드가 뷰 컴포넌트 (vue 컴포넌트를 포함한 JSX라고 한다.)
      */}
      <div ref={ref} />
    </div>
  )
};

export default App;