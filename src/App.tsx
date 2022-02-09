import React from "react";

import { Grommet } from "grommet";

import { Provider } from "urql";

import Structure from "./components/Structure";
import client from "./server/provider";
import theme from "./themeGrommet";

const App: React.FC = () => {
  return (
    <Provider value={client}>
      <Grommet theme={theme}>
        <Structure></Structure>
      </Grommet>
    </Provider>
  );
};

export default App;
