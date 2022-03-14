import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import state, { addPost, updateNewPostText } from "./state.js"


export let rerenderAll = () => {ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
      <App postsData={state.ProfilePage.postsData}
            messagesData={state.DialogsPage.messagesData}
            dialogsData={state.DialogsPage.dialogsData} 
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            newPostText={state.ProfilePage.newPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
    );}