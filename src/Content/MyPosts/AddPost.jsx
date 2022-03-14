import React from 'react';
import css from './AddPost.module.css'


const AddPost = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
    
        props.addPost()
        props.updateNewPostText('')
        }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        

    }

 
    return (
        <div>
            <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText}/>
            <button onClick={addPost}>Add new Post</button>

        </div>
    )
}

export default AddPost