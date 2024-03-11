import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])// useState is a hook that allows you to have state variables in functional components
  const [todoValue, setTodoValue] = useState('') // todoValue is the current value of the input field and setTodoValue is a function that allows you to change the value of todoValue

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList })) // localStorage is a property that allows you to access a Storage object for the Document's origin; JSON.stringify() converts a JavaScript object or value to a JSON string
  }
  
  
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => { // filter() creates a new array with all elements that pass the test implemented by the provided function
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => { // useEffect is a hook that allows you to perform side effects in functional components (e.g. data fetching, subscriptions, manually changing the DOM, etc.)
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
  }, [])


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
