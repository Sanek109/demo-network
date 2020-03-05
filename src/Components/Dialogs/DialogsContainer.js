import React from 'react'
import {addMessageActionCreator} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsReducer: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMewssageBody) => {
            dispatch(addMessageActionCreator(newMewssageBody))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps)
    , withAuthRedirect
)(Dialogs);