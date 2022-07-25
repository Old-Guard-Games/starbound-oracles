import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import moment from 'moment';

import './Result.css';

const Results = () => {
  const results = useSelector((state: AppState) => state.results.history.slice().reverse());

  return (
    <div className="results-list">
      {results.map(r => (
        <div className="entry">
          <span className="timestamp">{moment(r.timestamp).fromNow()}</span>
          <span className="result">{r.result}</span>
        </div>
      ))}
    </div>
  );
}
export default Results;