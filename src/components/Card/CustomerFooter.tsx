import React from "react";
import { Link } from "react-router-dom";

import { CardFooter, Button } from "grommet";
import { Customer } from "../../generated/graphql";

interface CustomerFooterProps {
  customer: Customer;
}
const CustomerFooter = ({ customer }: CustomerFooterProps) => (
  <CardFooter pad={{ horizontal: "small" }} background="light-3" margin="8px">
    <Link to={`/${customer.id}`}>
      <Button primary label="Details" />
    </Link>
  </CardFooter>
);

export default CustomerFooter;
