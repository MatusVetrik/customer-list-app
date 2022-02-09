import { Client, createClient } from "urql";
import { gql, useQuery } from "urql";

const client: Client = createClient({
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

export default client;
