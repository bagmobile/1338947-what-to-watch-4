import {connect} from "react-redux";
import {isAuthorized, isFetching} from "../../reducer/user/selectors";
import PrivateRoute from "./private-route";

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorized(state),
  isFetching: isFetching(state)
});

export default connect(mapStateToProps)(PrivateRoute);
