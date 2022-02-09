import { Card } from "grommet";

import CustomerHeader from "./CustomerHeader";
import CustomerBody from "./CustomerBody";
import CustomerFooter from "./CustomerFooter";
import { Customer } from "../../generated/graphql";

interface CustomerCardProps {
  index: number;
  customer: Customer;
}

const CustomerCard = ({ customer, index }: CustomerCardProps) => {
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
      <CustomerBody customer={customer} />
      <CustomerFooter customer={customer} />
    </Card>
  );
};

export default CustomerCard;
