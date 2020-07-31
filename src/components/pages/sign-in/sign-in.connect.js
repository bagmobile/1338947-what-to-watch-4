import {connect} from "react-redux";
import SignIn from "./sign-in";
import {Operation as UserOperation} from "../../../reducer/user/user";
import {isAuthorized, getAuthorizationErrorMessage} from "../../../reducer/user/selectors";

const mapStateToProps = (state) => ({
  errorMessage: getAuthorizationErrorMessage(state),
  isAuthorized: isAuthorized(state),
});

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (email, password) => {
    return dispatch(UserOperation.login({email, password}));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);