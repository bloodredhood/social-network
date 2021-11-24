const state = {
  profilePage: {
    posts: [
      {id: 1, likesCount: 1, text: "any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. any text u wanna write. "},
      {id: 2, likesCount: 15, text: "lorem lorem blablabla"},
      {id: 3, likesCount: 5, text: "SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED SO BORED "},
    ]
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
    ]
  }
}

export const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
}



export default state