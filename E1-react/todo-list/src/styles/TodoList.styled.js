
import styled from 'styled-components';

// Responsive Container
export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;

// Header Styling
export const Header = styled.header`
 
  text-align: center;
  padding: 20px;
  
`;

// Input Container
export const InputContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

// Task Input Styling
export const TaskInput = styled.input`
  flex-grow: 1;
  padding: 10px;
 
`;

// Add Button Styling
export const AddButton = styled.button`
  padding: 10px 20px;
`;

// Tasks List Container
export const TasksList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Individual Task Item
export const TaskItem = styled.li`
  display: flex;
  background-color: ${props => props.completed ? '#E0E0E0' : 'white'};
  padding: 10px;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

// Task Text
export const TaskText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

// Action Buttons
export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const CompleteButton = styled.button`
  padding: 5px 10px;
 
`;

export const DeleteButton = styled.button`
  
  padding: 5px 10px;
 
`;