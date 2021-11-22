import React from "react";
import Post from "./profile-items/Post";
import "./Profile.css"

const posts = [
  {id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. "},
  {id: 2, likesCount: 15, text: "lorem lorem blablabla"},
  {id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED "},
]

const postElements = posts.map( p => <Post text={p.text} likesCount={p.likesCount} />)

const Profile = () => {

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