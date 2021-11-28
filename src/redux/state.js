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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    const newPost = {
      id: Date.now(),
      text: this._state.profilePage.newPostText,
      likesCount: 0,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  addMessage() {
    const newMessage = {
      id: Date.now(),
      message: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer //observer pattern
  }
}


export default store
window.store = store