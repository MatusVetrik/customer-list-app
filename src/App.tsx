import { Grommet } from "grommet";

import { createClient, Provider } from "urql";

import Structure from "./components/Routes";

import theme from "./themeGrommet";

const client = createClient({
  url: "https://upright-bedbug-84.hasura.app/v1/graphql",
  fetchOptions: () => {
    return {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "GvMdsg9CVSKmz6HFRftkxczqvU6W6Q1WYmcn4GhV6iyG4nFJF1JD57PFULBwLdz8",
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
