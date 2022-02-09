import React from "react";

import { gql, useQuery } from "urql";

import { Box } from "grommet";

import CustomerCard from "./Card/CustomerCard";
import Fetching from "../server/Fetching";
import { Customer } from "../generated/graphql";

const query = gql`
  query MyQuery {
    customer(distinct_on: id) {
      id
      birth_date
      name
      vip
    }
  }
`;

interface Props {
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
}

const CustomersList: React.FC<Props> = ({ setSelectedCustomer }) => {
  const [result] = useQuery({
    query: query,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Fetching height="100vh"></Fetching>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Box
      align="center"
      justify="center"
      direction="row"
      gap="large"
      pad={{ vertical: "medium", horizontal: "medium" }}
    >
      {data.customer.map((customer: any, key: number) => (
        <CustomerCard
          key={key}
          index={key}
          customer={customer}
          setSelectedCustomer={setSelectedCustomer}
        ></CustomerCard>
      ))}
    </Box>
  );
};

export default CustomersList;
