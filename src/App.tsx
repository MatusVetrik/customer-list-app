import React from "react";

import { Grommet } from "grommet";

import { Provider } from "urql";

import Structure from "./components/Routes";
import client from "./server/provider";
import theme from "./themeGrommet";

const App = () => {
  return (
    <Provider value={client}>
      <Grommet theme={theme}>
        <Structure />
      </Grommet>
    </Provider>
  );
};

export default App;
