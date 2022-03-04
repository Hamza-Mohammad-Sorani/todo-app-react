const { createContext, useState } = require( 'react' );

export const TodosContext = createContext(); 


var id = 1;

let initialData = [
  { id: id++,text: 'do something',level: 'easy' },
  { id: id++,text: 'Do The Dishes',level: 'medium' },
  { id: id++,text: 'Watch AOT',level: 'hard' },
];


export default function TodosContextProvider(props) {
  const [ todos,setTodos ] = useState( initialData );
  const [ filter,setFilter ] = useState( 'all' );
  const [ level, setLevel ] = useState( '' );
  
  
  const handleAddTask = ( text ) => {
    setTodos( [ ...todos,{ id: id++,text: text,level: level } ] )
  }
  
  const filteredTodos = todos.filter( todo => {
    return (
      ( filter === "all" ) ||
      ( filter === "hard" && todo.level === 'hard' ) ||
      ( filter === "medium" && todo.level === 'medium' ) ||
      ( filter === "easy" && todo.level === 'easy' ) 
    )
  })
  
  return (
    <TodosContext.Provider
      value={ { 
        todos: filteredTodos,
        setTodos,
        handleAddTask,
        filter,
        setFilter,
        level,
        setLevel,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}
