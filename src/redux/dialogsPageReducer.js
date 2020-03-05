const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hello my friend!'},
        {id: 2, message: 'Good'},
        {id: 3, message: 'Where are you?'},
        {id: 4, message: 'Minsk!'}
    ],
    dialogsData: [
        {id: 1, name: 'Sveta'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Valera'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;