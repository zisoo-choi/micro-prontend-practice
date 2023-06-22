import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

// react 18에서는 아래와 같은 메서드 형태가 지원되지 않는다.
// ReactDOM.render(<App/>, document.getElementById('root'))
// 아래 코드와 위의 코드는 같은 기능을 한다.

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App/>);