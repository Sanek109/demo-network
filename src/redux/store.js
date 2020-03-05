import profileReducer from "./profilePageReducer";
import dialogsReducer from "./dialogsPageReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'How are you?', likeCount: '2'},
                {id: 2, post: 'My second post!', likeCount: '6'},
                {id: 3, post: 'IT-KamaSutra cool!', likeCount: '10'}
            ],
            newValuePost: 'Enter your text!'
        },
        messagesPage: {
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
            ],
            newValueMessage: 'Enter your message!'
        },
    },

    getState() {
        return this._state;
    },

    _rerenderEntaireTree() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._rerenderEntaireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._rerenderEntaireTree(this._state)
    }
}



export default store;
// window.store = store;