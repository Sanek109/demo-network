import profileReducer, {addPostActionCreator, deletePost} from "./profilePageReducer";
import React from 'react';

let state = {
    postsData: [
        {id: 1, post: 'How are you?', likeCount: '2'},
        {id: 2, post: 'My second post!', likeCount: '6'},
        {id: 3, post: 'IT-KamaSutra cool!', likeCount: '10'}
    ]
}

it('length of posts should be increented', () => {
    let action = addPostActionCreator('text any');

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4);
});

it('message of the post should be correct', () => {
    let action = addPostActionCreator('text any');

    let newState = profileReducer(state, action)

    expect(newState.postsData[3].post).toBe('text any');
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2);
});

it('after deleting length of message should be decrement if id incorect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4);
});




