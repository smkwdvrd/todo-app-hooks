import React, { useContext } from "react";
import { Box, Heading, Button } from "grommet";
import { List, Add, Search } from "grommet-icons";
import Store from "../Store";

const Header = ({ setShowLeft }) => {
  const { state, dispatch } = useContext(Store);

  const showInput = value => dispatch({ type: value });

  return (
    <AppBox fill background="main">
      <Button icon={<List size="large" />} onClick={setShowLeft} />
      <Button
        icon={<Search size="large" />}
        onClick={() => showInput("INPUT_SEARCH")}
      />
      <Button
        icon={<Add size="large" />}
        onClick={() => showInput("INPUT_ADD")}
      />
      <Heading level="3" margin="auto">
        My ToDo App
      </Heading>
    </AppBox>
  );
};

const AppBox = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="start"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

export { Header };
