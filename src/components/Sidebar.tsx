import React from "react";
import { useDispatch, useSelector } from "react-redux";
import data from '../utility/data';

import './Sidebar.css';

import { toggle } from "../store/sidebarSlice";

import { AppState } from "../store/store";
import { RollTableCategory } from "../utility/rolltable";
import Category from "./Category";

const Sidebar = () => {
  const open = useSelector((state: AppState)=> state.sidebar.isOpen);
  const dispatch = useDispatch();

  const classSuffix = open
   ? 'open'
   : 'closed';

  return (
    <div className={`sidebar sidebar-${classSuffix}`}>
      <header>
        <h2>Oracles</h2>
      </header>
      <div>
        {data.map((item: RollTableCategory, index: number) => {
          return (<Category key={index} data={item}/>)
        })}
      </div>
    </div>
   )
}
export default Sidebar;