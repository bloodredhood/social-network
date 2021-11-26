let rerenderEntireTree = () => {
  console.log('state changed');
}

const state = {
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
}

export const addPost = () => {
  const newPost = {
    id: Date.now(),
    text: state.profilePage.newPostText,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const addMessage = () =>{
  const newMessage = {
    id: Date.now(),
    message: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer //observer pattern
}

export default state