import React, { useState, useContext, useReducer } from "react";
import { Box, Grommet, grommet, Collapsible } from "grommet";

import { deepMerge } from "grommet/utils";
import { Main } from "./components/Main";
import { useMyContext, useMyReducer } from "./lib";
import Store from "./Store";
import reducer from "./reducer";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      main: "#b4d4d6"
    },
    font: {
      family: "Work Sans",
      height: "20px",
      size: "14px"
    }
  }
});

function App() {
  const [showLeft, setShowLeft] = useState(false);
  const globalStore = useMyContext(useContext(Store), "state");
  const [state, dispatch] = useMyReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Grommet theme={theme}>
        <Box fill>
          <Header setShowLeft={() => setShowLeft(!showLeft)} />
          <Box
            direction="row"
            flex
            justify="start"
            overflow={{ horizontal: "hidden" }}
          >
            <Collapsible direction="vertical" open={showLeft}>
              <Box flex width="15vw">
                <Sidebar />
              </Box>
            </Collapsible>

            <Box
              flex
              width="large"
              align="center"
              justify="center"
              margin="auto"
            >
              <Main />
            </Box>
          </Box>
        </Box>
      </Grommet>
    </Store.Provider>
  );
}

export default App;
