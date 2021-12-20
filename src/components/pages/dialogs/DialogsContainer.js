import "./Dialogs.css"
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state) => {
  return {
    dialogsPage: {...state.dialogsPage},
  }
}

export default connect(mapStateToProps, {updateNewMessageBodyActionCreator, sendMessageActionCreator})(AuthRedirectComponent)