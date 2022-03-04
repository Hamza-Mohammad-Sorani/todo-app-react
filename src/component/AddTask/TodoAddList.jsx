import React,{ useContext, useState,useRef, useEffect } from 'react';
import { TodosContext } from '../TodosContext';
import Buttons from './Buttons'

export default function TodoAddList() {
  const { setLevel,handleAddTask } = useContext( TodosContext );
  const [ input,setInput ] = useState( '' );
  const hardInput = useRef()
  const mediumInput = useRef()
  const easyInput = useRef()
  
  useEffect( () => {
    hardInput.current.parentElement.focus();
    hardInput.current.parentElement.click();
  }, [])
  
  
  const handleSetLevel = ( e ) => {
    let field = e.target;
    var current;
    if ( field.children[ 0 ] === hardInput.current || field === hardInput.current ) {
      current = hardInput.current
    } else if ( field.children[ 0 ] === mediumInput.current || field === mediumInput.current ) {
      current = mediumInput.current;
    } else {
      current = easyInput.current;
    }
    current.click();
    setLevel( current.value );
  }
  
  const handleInputTask = ( e ) => setInput( e.target.value );

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( input !== '') {
      handleAddTask( input );
      setInput( '' );
    }
  }
  
  return (
    <div className="add-task-container p-3 my-4">
      <form action="">
        <h3><label htmlFor="addTask">Add Task</label></h3>
        <input type="text"  className="form-control" id='addTask' placeholder='Your Task..' value={input} onChange={handleInputTask}  />
        <Buttons  handleSetLevel={handleSetLevel} hardInput={hardInput} mediumInput={mediumInput} easyInput={easyInput}  />
        <button type="submit" onClick={handleSubmit}  className="btn btn-primary text-light mt-3 add-task-btn">Add Task</button>
      </form>
      
    </div>
  )
}
