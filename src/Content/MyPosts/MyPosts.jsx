import React from 'react';
import AddPost from './AddPost';
import css from './MyPosts.module.css'
import Post from './Post';





const MyPosts = (props) => {
    let PostArray = props.postsData
    .map(post => <Post message={post.message} likes={post.likes}/>)


    return (<div>
        <div>My Posts</div>
        <AddPost addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}/>
        {PostArray}
        
         </div>
    )
}

export default MyPosts