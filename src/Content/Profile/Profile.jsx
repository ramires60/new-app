import React from "react";
import css from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <div>Profile description</div>
      <MyPosts postsData={props.postsData}
      addPost={props.addPost}
      newPostText={props.newPostText}
      updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
