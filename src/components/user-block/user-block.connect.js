import {connect} from "react-redux";
import {isAuthorized, getUserProfile} from "../../reducer/user/selectors";
import UserBlock from "./user-block";

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorized(state),
  userProfile: getUserProfile(state),
});


export default connect(mapStateToProps)(UserBlock);
