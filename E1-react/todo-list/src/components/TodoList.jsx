import { useState } from "react";
import {
  AppContainer,
  Header,
  InputContainer,
  TaskInput,
  AddButton,
  TasksList,
  TaskItem,
  TaskText,
  ActionButtons,
  CompleteButton,
  DeleteButton,
} from "../styles/TodoList.styled";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <AppContainer>
      <Header>
        <h1>To Do List</h1>
      </Header>
      <InputContainer>
        <TaskInput
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add Task..."
        />
        <AddButton onClick={addTask}>Add Task</AddButton>
      </InputContainer>
      <TasksList>
        {tasks.map((task) => (
          <TaskItem key={task.id} completed={task.completed}>
            <TaskText>{task.text}</TaskText>
            <ActionButtons>
              <CompleteButton onClick={() => completeTask(task.id)}>
                {task.completed ? "Unfinished" : "Completed"}
              </CompleteButton>
              <DeleteButton onClick={() => deleteTask(task.id)}>
                Delete
              </DeleteButton>
            </ActionButtons>
          </TaskItem>
        ))}
      </TasksList>
    </AppContainer>
  );
};

export default TodoList;
