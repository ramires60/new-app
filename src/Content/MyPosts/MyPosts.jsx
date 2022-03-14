import React from 'react';
import AddPost from './AddPost';
import css from './MyPosts.module.css'
import Post from './Post';


let postsData = [
    {id: 1, message: 'no-unused-vars', likes:1},
    {id: 2, message: 'is defined but never used', likes:10},
    {id: 3, message: 'assets by chunk 1.72', likes:100},
    {id: 4, message: 'Entrypoint main 1.72 MiB (1.61 MiB)', likes:102}
]

let PostArray = postsData
    .map(post => <Post message={post.message} likes={post.likes}/>)


const MyPosts = () => {
    return (<div>
        <div>My Posts</div>
        <AddPost/>
      {PostArray}
        
         </div>
    )
}

export default MyPosts