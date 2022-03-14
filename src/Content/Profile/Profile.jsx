import React from "react";
import css from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>Profile description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
