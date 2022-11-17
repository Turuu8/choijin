import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSecond from './component/App';
import reportWebVitals from './reportWebVitals';
import { MenuBarProvider } from './context/MenuBarContext';
import { LoginProvirder } from './context/LoginAndData';
// import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvirder>
    <MenuBarProvider>
      <AppSecond />
    </MenuBarProvider>
  </LoginProvirder>
);
reportWebVitals();
