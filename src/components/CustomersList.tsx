import { gql, useQuery } from "urql";

import { Box } from "grommet";

import CustomerContainer from "./Card/CustomerContainer";
import Fetching from "../server/Fetching";
import AppHeader from "./AppHeader";

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

const CustomersList = () => {
  const [result] = useQuery({
    query: query,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Fetching height="100vh"></Fetching>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <AppHeader text="Customers" />
      <Box
        align="center"
        justify="center"
        direction="row"
        gap="large"
        pad={{ vertical: "medium", horizontal: "medium" }}
      >
        {data.customer.map((customer: any, key: number) => (
          <CustomerContainer key={key} index={key} customer={customer} />
        ))}
      </Box>
    </>
  );
};

export default CustomersList;
