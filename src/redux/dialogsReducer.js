const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export const updateNewMessageBodyActionCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

const initialState = {
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
	newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state;
		case SEND_MESSAGE:
			const body = state.newMessageBody
			state.newMessageBody = ""
			state.messages.push({ id: Date.now(), message: body },)
			return state
		default: return state
	}
}

export default dialogsReducer