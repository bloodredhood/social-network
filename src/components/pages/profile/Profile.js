import React from "react";
import Post from "./profile-items/Post";
import "./Profile.css"

const Profile = (props) => {

  const postElements = props.posts.map( p => <Post key={p.id} text={p.text} likesCount={p.likesCount} />)

  const newPostElement = React.createRef()
  const addNewPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }

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
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={ addNewPost }>Add post</button>
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