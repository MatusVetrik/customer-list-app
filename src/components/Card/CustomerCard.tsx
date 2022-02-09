import React from "react";

import { Card } from "grommet";

import CustomerHeader from "./CustomerHeader";
import CustomerBody from "./CustomerBody";
import CustomerFooter from "./CustomerFooter";
import { Customer } from "../../generated/graphql";

interface Props {
  index: number;
  customer: Customer;
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
}

const CustomerCard: React.FC<Props> = ({
  customer,
  index,
  setSelectedCustomer,
}) => {
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
      <CustomerHeader index={index} customer={customer}></CustomerHeader>
      <CustomerBody customer={customer}></CustomerBody>
      <CustomerFooter
        customer={customer}
        setSelectedCustomer={setSelectedCustomer}
      ></CustomerFooter>
    </Card>
  );
};

export default CustomerCard;
