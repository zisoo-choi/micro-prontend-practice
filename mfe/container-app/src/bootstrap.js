import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

// react 18에서는 아래와 같은 메서드 형태가 지원되지 않는다.
// ReactDOM.render(<App/>, document.getElementById('root'))
// 아래 코드와 위의 코드는 같은 기능을 한다.

/*
    HTML에서 id가 root인 요소를 찾아 rootElement 변수에 할당한다.
    (이 요소는 React 애플리케이션이 렌더링될 대상 요소이다.)
*/
const rootElement = document.getElementById('root');
/*
    createRoot 메서드를 사용하여 rootElement를 루트로 설정하고,
    render 메서드를 호출하여 <APP/> 컴포넌트를 해당 루트에 렌더링한다.
    이를 통해 React 애플리케이션이 시작되고 화면이 표시된다.
*/
createRoot(rootElement).render(<App/>);