import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  font-family: "Arial", sans-serif;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.header`
  text-align: center;
  font-size: 1.8rem;
  border-bottom: 2px solid #eee;
`;

export const InputContainer = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 10px;
`;

export const TaskInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #bdb76b;
  color: black;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const TasksList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  background-color: ${(props) => (props.completed ? "#bdb76b" : "white")};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TaskText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
  font-size: 1rem;
  word-wrap: break-word;
  word-break: break-word;
  text-align: left;
  color: ${(props) => (props.completed ? "#6c757d" : "#333")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const CompleteButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;
