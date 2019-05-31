import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem auto;
`;

const Empty = () => (
  <Wrapper>
    <h1>Task list is empty, please add something</h1>
  </Wrapper>
);

export default Empty;
