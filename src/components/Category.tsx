import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../store/sidebarSlice";
import { selectTable } from "../store/tableSlice";
import { RollTable, RollTableCategory } from "../utility/rolltable";

import './Category.css'

interface CategoryProps {
  data: RollTableCategory
}

interface TableProps {
  data: RollTable
}


const Table = (props: TableProps) => {
  const table = props.data;
  const {name} = table;
  const dispatch = useDispatch();

  return (
    <h4 className="sidebar-table"
        onClick={() => {
          dispatch(selectTable(table))
          dispatch(close());
        }}>
      {name}
    </h4>
  )
}

const Category = (props: CategoryProps) => {
  const {name, tables} = props.data;
  const [open, setOpen] = useState(false);

  const suffix = open ? 'open' : 'closed';

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div className={`category category-${suffix}`}>
      <h3 className="category-heading" onClick={toggle}>
        <span className={`category-toggle`}>▶</span> {name} 
      </h3>
      <div className="category-body">
        <ul>
          {tables.map(t => (<li><Table data={t}/></li>))}
        </ul>
      </div>
    </div>
  )

}
export default Category;