import React, { createContext, useState, useContext } from "react";
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
  ErrorMessage,
} from "../styles/TodoList.styled";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const addTask = (newTask) => {
    const taskExists = tasks.some(
      (task) => task.text.toLowerCase() === newTask.toLowerCase().trim()
    );

    if (taskExists) {
      setError("This task already exists.");
      return;
    }

    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
        },
      ]);
      setError("");
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

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        completeTask,
        deleteTask,
        clearAllTasks,
        error,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext debe ser usado dentro de un TaskProvider");
  }
  return context;
};

const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  const { tasks, addTask, completeTask, deleteTask, clearAllTasks, error } =
    useTaskContext();

  const handleAddTask = () => {
    addTask(newTask);
    if (!error) {
      setNewTask("");
    }
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
        <AddButton onClick={handleAddTask}>Add</AddButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
      {tasks.length > 0 && (
        <ActionButtons>
          <DeleteButton onClick={clearAllTasks}>
            Delete all tasks.
          </DeleteButton>
        </ActionButtons>
      )}
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

export { TodoList };
