import './App.css'
import { TodoProvider } from './components/ToDoContext/ToDoContext'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
    <TodoProvider>
      <ToDoList/>
    </TodoProvider>
    </>
  )
}

export default App
