import React, { useState } from "react";
import styled from "styled-components";

const Checkbox = ({ checked, onChange, ...props }) => {
  const [check, setCheck] = useState(checked);

  const handleChange = e => {
    const a = e.target.checked;
    onChange(a);
    setCheck(a);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={check} onChange={e => handleChange(e)} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  background: ${props => (props.checked ? "#275936" : "#e1f6f7")}
  border: 1px solid #d9f8fa;
  border-radius: 100px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(40, 181, 191, 1);
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")}
  }
`;

export default Checkbox;
