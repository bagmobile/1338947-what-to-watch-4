import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import {connect} from "react-redux";
import App from "../../components/app/app";

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(UserOperation.checkAuth());
    dispatch(DataOperation.loadMovies());
    dispatch(DataOperation.loadPromoMovie());
  },
});

export default connect(null, mapDispatchToProps)(App);
