import React, { useContext } from "react";
import styled from "styled-components";
import Store from "../Store";

const Sidebar = () => {
  const { state, dispatch } = useContext(Store);

  const updFilter = filter => dispatch({ type: filter });

  return (
    <Wrap>
      <Button onClick={() => updFilter("ALL_FILTER")}>All</Button>
      <Button onClick={() => updFilter("NEW_FILTER")}>New</Button>
      <Button onClick={() => updFilter("COMPLETED_FILTER")}>Completed</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  background: #f2fcff;
  border: 1px solid #def4fa;
  outline: none;
  padding: 2vw 0;
`;

export default Sidebar;
