import React from "react";
import { Grommet } from "grommet";

import { createClient, Provider } from "urql";

import Structure from "./components/Routes";

import theme from "./themeGrommet";

const client = createClient({
  url: `${import.meta.env.VITE_SCHEMA_PATH}`,
  fetchOptions: () => {
    return {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": `${import.meta.env.VITE_ADMIN_SECRET}`,
      },
    };
  },
});

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
