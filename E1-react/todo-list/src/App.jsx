import { TodoList, TaskProvider } from "./components/TodoList"


function App() {

  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  )
}

export default App
