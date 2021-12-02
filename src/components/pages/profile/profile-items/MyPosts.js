import React from "react";
import "./../Profile.css"
import Post from "./Post"

const MyPosts = (props) => {

  const postElements = props.posts.map(p => <Post key={p.id} text={p.text} likesCount={p.likesCount} />)
  const newPostElement = React.createRef()

  const addNewPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className='postsColumn'>
      <div className='postCreating'>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className='personalPosts'>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts