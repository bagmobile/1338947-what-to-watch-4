import React from "react";
import PropTypes from "prop-types";
import {COUNT_RATING_STARS} from "../../consts";

const Rating = ({count = COUNT_RATING_STARS}) => {
  const stars = (new Array(count)).fill(0).map((_item, index) => ++index);

  return (
    <div className="rating">
      <div className="rating__stars">
        <input className="rating__input" id="star-0" type="radio" name="rating" value="0"
          autoComplete="off"
          defaultChecked={true}/>
        {stars.map((item) =>
          <React.Fragment key={`star-${item}`}>
            <input className="rating__input" id={`star-${item}`} type="radio" name="rating" value={item}
              autoComplete="off"/>
            <label className="rating__label" htmlFor={`star-${item}`}>Rating ${item}</label>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

Rating.propTypes = {
  count: PropTypes.number,
};

export default Rating;
