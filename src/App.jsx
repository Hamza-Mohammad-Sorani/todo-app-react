import './App.css';
import  TodosContextProvider  from './component/TodosContext';
import TodoAddList from './component/AddTask/TodoAddList';
import Todos from './component/Todos/Todos';
import TodosFiltering from './component/Todos/TodosFiltering';
import TodoList from './component/Todos/TodoList'

function App() {
  return (
    <div className="App ">
        <TodosContextProvider>
        <TodoAddList />
        <Todos>
          <TodosFiltering />
          <TodoList/>
        </Todos>
        </TodosContextProvider>
    </div>
  );
}

export default App;
