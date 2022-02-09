import React from "react";
import { Customer } from "../../generated/graphql";

import CustomerDetails from "./CustomerDetails";

interface Props {
  customer: Customer | null;
}

const Detail: React.FC<Props> = ({ customer }) => {
  return <CustomerDetails customer={customer} />;
};

export default Detail;
