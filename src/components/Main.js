import React, { useContext } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import TaskList from "./TaskList";
import Store from "../Store";
import { SearchForm } from "./SearchForm";

const Main = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <Section>
      {state.input === "INPUT_ADD" ? <Form /> : <SearchForm />}
      <TaskList />
    </Section>
  );
};

const Section = styled.section`
display: flex
flex-direction: column
width: 70%
margin-top: 4vw
margin-right: 9vw
`;
export { Main };
