import { Card } from "grommet";

import CustomerHeader from "./CustomerHeader";
import CustomerBody from "./CustomerBody";
import CustomerFooter from "./CustomerFooter";
import { Customer, useDetailQuery } from "../../generated/graphql";

interface CustomerCardProps {
  index: number;
  customer: Customer;
}

const CustomerContainer = ({ customer, index }: CustomerCardProps) => {
  const [{ data, fetching, error }] = useDetailQuery();

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Card
      animation={["fadeIn", "slideUp"]}
      height="2xl"
      width="medium"
      background="light-3"
      align="center"
      justify="between"
      flex="shrink"
      hoverIndicator
    >
      <CustomerHeader index={index} customer={customer} />
      <CustomerBody data={data} customer={customer} fetching={fetching} />
      <CustomerFooter customer={customer} />
    </Card>
  );
};

export default CustomerContainer;
