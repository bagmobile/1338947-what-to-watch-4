import React from "react";
import PropTypes from "prop-types";
import {formatTime} from "../../../utils/util";

export default function VideoPlayerTimeline({progress, remaining}) {

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100"/>
        <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{formatTime(remaining)}</div>
    </div>
  );
}

VideoPlayerTimeline.propTypes = {
  remaining: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

