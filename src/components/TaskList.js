import React, { useContext } from "react";
import styled from "styled-components";
import Task from "./Task";
import Store from "../Store";
import Empty from "./Empty";
import { strIncl, filterList } from "../lib";

const TaskList = () => {
  const { state, dispatch } = useContext(Store);

  const search = (oldList, query) => {
    let lowQuery = query.trim().toLowerCase();
    return oldList.filter(obj => strIncl(obj.text.toLowerCase(), lowQuery));
  };

  const list = search(filterList(state.todos, state.filter), state.query);

  return (
    <Wrapper>
      {!list.length ? (
        <Empty />
      ) : (
        list.map((value, index) => (
          <Task
            key={value.id}
            value={value}
            deleteTask={() => dispatch({ type: "DELETE", payload: value })}
          />
        ))
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2px 0;
  padding: 1vw 2vw;
  display: flex;
  flex-direction: column;
`;

export default TaskList;
