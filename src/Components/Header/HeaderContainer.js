import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer)
