const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export const updateNewMessageBodyActionCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

const dialogsReducer = (state, action) => {
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