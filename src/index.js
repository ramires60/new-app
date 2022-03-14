import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./state.js"





ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
    <App postsData={state.ProfilePage.postsData}
          messagesData={state.DialogsPage.messagesData}
          dialogsData={state.DialogsPage.dialogsData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
