import React from 'react';
import css from './AddPost.module.css'


const AddPost = () => {
    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text) }

 
    return (
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add new Post</button>

        </div>
    )
}

export default AddPost