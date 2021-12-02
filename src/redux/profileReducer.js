const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

const initialState = {
	posts: [
		{ id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. " },
		{ id: 2, likesCount: 15, text: "lorem lorem blablabla" },
		{ id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED " },
	],
	newPostText: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		case ADD_POST:
			const newPost = state.newPostText
			state.newPostText = ""
			state.posts.push({ id: Date.now(), text: newPost })
			return state;
		default: return state
	}
}

export default profileReducer