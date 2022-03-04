import React, { useContext } from "react";
import { TodosContext } from "../TodosContext";

export default function TodosFiltering(  ) {
  const {filter, setFilter} = useContext(TodosContext)
  return (
    <div className="buttons my-3">
      <button onClick={
          () => setFilter("all")
      } 
      className={` btn btn-primary   ${filter === 'all' ? 'active' : ''}`}>all</button>
      <button onClick={
          () => setFilter("hard")
      } 
      className={`btn btn-danger ${filter === 'hard' ? 'active' : ''}`}>hard</button>
      <button onClick={
          () => setFilter("medium")
      } 
      className={`btn btn-success ${filter === 'medium' ? 'active' : ''}`}>medium</button>
      <button onClick={
          () => setFilter("easy")
      } 
      className={`btn btn-warning text-light  ${filter === 'easy' ? 'active' : ''}`}>easy</button>
    </div>
  )
}
