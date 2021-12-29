import React from "react";
import "./../Profile.css"
import Post from "./Post"
import { reduxForm, Field} from "redux-form";
import { required } from "../../../../utils/validators/validators";

const MyPosts = (props) => {

  const postElements = props.posts.map(p => <Post key={p.id} text={p.text} likesCount={p.likesCount} />)

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }


  return (
    <div className='postsColumn'>
      <div className='postCreating'>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className='personalPosts'>
        {postElements}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" validate={[required]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts