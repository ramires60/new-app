import React from 'react';
import { Route, Routes } from 'react-router-dom';

import css from './content.module.css'
import Dialogs from './Dialogs/Dialogs';
import NotFound from './NotFound/NotFound';
import Profile from './Profile/Profile';



const Content = (props) => {
    
    return (
        <div>

            <Routes>
                <Route path='/messages' element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
                <Route path='/profile' element={<Profile 
                postsData={props.postsData}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path='*' element={<NotFound/>}/>

            </Routes>
        
       
        </div>
    )
}

export default Content