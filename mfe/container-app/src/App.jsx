import React, { useEffect, useRef } from "react";
import { mount } from 'vueModuleApp/Sample';

const App = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div style=
        {{ margin: '10px', padding: '10px', textAlign: 'center', backgroundColor: 'cyan'}}>
      <h1>React - container-app</h1>

      {/* 아래 코드가 뷰 컴포넌트 */}
      <div ref={ref} />
    </div>
  )
};

export default App;