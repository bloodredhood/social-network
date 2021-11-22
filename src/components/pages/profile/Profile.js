import React from "react";
import Post from "./profile-items/Post";
import "./Profile.css"

const Profile = (props) => {

  const postElements = props.posts.map( p => <Post text={p.text} likesCount={p.likesCount} />)

  return (
    <div className='profile'>
      <img src="" alt="" />
      <div className='infoColumn'>
        <div className='profilePhoto'>
          photo
        </div>
        <div className='personalInfo'>
          profile info
        </div>
      </div>
      <div className='postsColumn'>
        <div className='postCreating'>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className='personalPosts'>
          {postElements}
        </div>
      </div>
    </div>
  )
}

export default Profile