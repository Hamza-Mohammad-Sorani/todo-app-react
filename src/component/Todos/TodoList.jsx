import React, { useContext } from 'react'
import { TodosContext } from '../TodosContext';
import Card from './Card';

export default function TodoList() {
  const { todos } = useContext( TodosContext );
  
  return (
    <div className='tasks mt-4'>
      {todos.map( todo => <Card key={todo.id} text={todo.text} />)}
    </div>
  )
}
