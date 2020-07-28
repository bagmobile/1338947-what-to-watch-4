import React from "react";
import PropTypes from "prop-types";
import UserProfile from "../../models/user-profile";
import {LinkPath} from "../../consts";
import {Link} from "react-router-dom";

const UserBlock = ({isAuthorized, userProfile}) => {

  if (isAuthorized) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={LinkPath.FAVORITE_MOVIES}>
            <img src={`https://htmlacademy-react-3.appspot.com${userProfile.avatarUrl}`}
              alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="user-block">
      <Link to={LinkPath.LOGIN} className="user-block__link">Sign in</Link>
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  userProfile: PropTypes.instanceOf(UserProfile),
};

export default UserBlock;
