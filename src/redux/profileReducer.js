const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})

const profileReducer = (state, action) => {
	switch(action.type) {
		case ADD_POST:
			const newPost = {
				id: Date.now(),
				text: state.newPostText,
				likesCount: 0,
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default: return state
	}
}

export default profileReducer