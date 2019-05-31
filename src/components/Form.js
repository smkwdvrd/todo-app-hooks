import React, { useState, useContext } from "react";
import styled from "styled-components";
import Store from "../Store";

const Form = () => {
  const { dispatch } = useContext(Store);

  const [value, setValue] = useState("");
  let id = Math.round(Math.random() * 1000);

  const createObj = () => {
    let obj = {
      text: value,
      completed: false,
      id: value.length + id
    };
    dispatch({ type: "ADD", payload: obj });
  };

  return (
    <FormWrapper
      onSubmit={e => {
        createObj();
        setValue("");
        e.preventDefault();
      }}
    >
      <Input
        type="text"
        value={value}
        required
        onChange={e => setValue(e.target.value)}
      />

      <Button type="submit" value="Submit">
        Add Task
      </Button>
    </FormWrapper>
  );
};

const Button = styled.button`
  border-radius: 100px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 15vw;
  background: #33b4f5;
  outline: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
`;

const Input = styled.input`
  width: 30vw;
  font-size: 20px;
  height: 20px;
  padding: 0.5rem;
  background: #edf9fa;
  outline: none;
  border: none;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -khtml-border-radius: 10px;
  transition: all 0.4s;
  &:focus {
    background: #e1f8fa;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export { Form, FormWrapper, Input };
