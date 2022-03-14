import React from 'react';
import { Route, Routes } from 'react-router-dom';

import css from './content.module.css'
import Dialogs from './Dialogs/Dialogs';
import NotFound from './NotFound/NotFound';
import Profile from './Profile/Profile';



const Content = () => {
    
    return (
        <div>

            <Routes>
                <Route path='/messages' element={<Dialogs/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<NotFound/>}/>

            </Routes>
        
       
        </div>
    )
}

export default Content