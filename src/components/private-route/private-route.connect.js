import {connect} from "react-redux";
import {isAuthorized} from "../../reducer/user/selectors";
import PrivateRoute from "./private-route.jsx";

const mapStateToProps = (state) => ({
  isAuthorized: isAuthorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);
