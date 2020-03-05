import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from './Post/MyPost';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormControls";

const maxLength50 = maxLengthCreator(50)

const MyPosts = React.memo (props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props  || nextState != this.state;
    // }
    let postsElements = props.profileReducer.postsData.map((el, key) => <MyPost post={el.post}
                                                                                likeCount={el.likeCount}
                                                                                key={key}/>)

    let addNewPost = (value) => {
        props.addPost(value.newPostBody)
    }

    return (
        <div>
            <div className={classes.posts}>
                <p>My posts</p>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
});


const AddPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field name='newPostBody' placeholder='Enter your post' validate={[required, maxLength50]}
               component={Textarea}/>
        <div>
            <button>Send</button>
        </div>
    </form>)
}

const AddPostFormRedux = reduxForm({
    form: 'addPostForm'
})(AddPostForm);

export default MyPosts;