const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. "},
        {id: 2, likesCount: 15, text: "lorem lorem blablabla"},
        {id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED "},
      ],
      newPostText: ""
  
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'JavaScript'},
        {id: 2, name: 'GitHub'},
        {id: 3, name: 'React'},
        {id: 4, name: 'Redux'},
        {id: 5, name: 'Google'},
        {id: 6, name: 'YouTube'},
      ],
      messages: [
        {id: 1, message: 'Hey, how are you? =)'},
        {id: 2, message: 'Hello world'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'bb gl hf'},
        {id: 5, message: 'cya'},
        {id: 6, message: 'you welcome'},
      ],
      newMessageText: ""
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer //observer pattern
  },

  dispatch(action) {
    if (action.type === "ADD_POST") {
      const newPost = {
        id: Date.now(),
        text: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === "ADD_MESSAGE") {
      const newMessage = {
        id: Date.now(),
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
      this._state.dialogsPage.newMessageText = action.newMessage
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store
window.store = store