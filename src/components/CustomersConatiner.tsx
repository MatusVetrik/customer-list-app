import { Box } from "grommet";

import Fetching from "./Fetching";
import AppHeader from "./AppHeader";
import { Customer, useCustomerQuery } from "../generated/graphql";
import CustomerCard from "./Card/CustomerCard";

const CustomersList = () => {
  const [{ data, fetching, error }] = useCustomerQuery();

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
        {data?.customer.map((customer: Customer, key: number) => (
          <CustomerCard key={key} index={key} customer={customer} />
        ))}
      </Box>
    </>
  );
};

export default CustomersList;
