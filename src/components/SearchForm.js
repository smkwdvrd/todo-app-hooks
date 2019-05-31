import React, { useContext } from "react";
import { FormWrapper, Input } from "./Form";
import Store from "../Store";

const SearchForm = () => {
  const { state, dispatch } = useContext(Store);

  const searchText = e => {
    let text = e.target.value;
    const query = text || "";
    dispatch({ type: "SEARCH", payload: query });
  };

  const handleS = e => {
    e.preventDefault();
  };

  return (
    <FormWrapper onSubmit={handleS}>
      <Input onChange={e => searchText(e)} />
    </FormWrapper>
  );
};

export { SearchForm };
