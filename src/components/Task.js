import React, { useContext } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import Store from "../Store";
import { updateStatus } from "../lib";

const Task = ({ value, deleteTask }) => {
  const { state, dispatch } = useContext(Store);

  const handleChange = isCheck => changeStatus(value.id, isCheck);

  const changeStatus = (id, completed) => {
    const updatedList = updateStatus(state, id, completed);
    dispatch({ type: "REFRESH", payload: updatedList });
  };

  return (
    <Wrapper>
      <label>
        <Checkbox checked={value.completed} onChange={handleChange} />
      </label>
      <Text done={value.completed}>{value.text}</Text>
      <Button onClick={deleteTask}> Delete </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-bottom: 1px solid #c7c7c7;
`;

const Button = styled.button`
  border-radius: 100px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9vw;
  background: #b04f57;
  color: white;
  outline: none;
  cursor: pointer;
  font-size: 15px;
`;

const Text = styled.p`
  font-size: 20px;
  text-decoration: ${props => (props.done ? "line-through" : "none")};
`;

export default Task;
