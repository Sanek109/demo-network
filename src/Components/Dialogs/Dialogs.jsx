import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {Textarea} from "../common/formsControls/FormControls";

const maxLength30 = maxLengthCreator(30)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsReducer.dialogsData.map((el, key) => <DialogItem id={el.id} name={el.name} key={key} />)

    let messagesElements = props.dialogsReducer.messagesData.map((el, key) => <Message message={el.message} key={key} />)

    let addNewMessage = (value) => {
        props.addMessage(value.newMessageBody)
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength30]} />
        <button>Send message!</button>
    </form>)
}

const AddMessageFormRedux = reduxForm({
    form: 'addMessageForm'
})(AddMessageForm)

export default Dialogs;