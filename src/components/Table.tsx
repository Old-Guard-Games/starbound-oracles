import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResult } from "../store/resultSlice";
import { AppState } from "../store/store";

import './Table.css';

const getRange = (min: number, max:number):string => {
  if (min===max) {
    return `${min}`;
  }
  return `${min}-${max}`;
}

const Table = (props: any) => {
  const table = useSelector((state: AppState) => state.table.selected);
  const dispatch = useDispatch();

  if (!table) {
    return (<></>);
  }

  const onRollClick = () => {
    const result = table.roll();
    dispatch(addResult({
      timestamp: Date.now(),
      result
    }));
  }

  return (
    <div className="table-container">
      <h1>{table.name}</h1>
      <button className="roll-button" onClick={onRollClick}>Roll</button>
      <div className="table">
        {table.items.map(item => (
          <div className="entry">
            <span className="range">{getRange(item.min, item.max)}</span>
            <span className="result">{item.contents}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Table;