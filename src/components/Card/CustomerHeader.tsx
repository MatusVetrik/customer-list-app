import React from "react";

import { CardHeader, Avatar } from "grommet";

import avatar01 from "./assets/avatar01.png";
import avatar02 from "./assets/avatar02.png";
import avatar03 from "./assets/avatar03.png";
import { Customer } from "../../generated/graphql";

interface Props {
  index: number;
  customer: Customer;
}

const CustomerHeader: React.FC<Props> = ({ customer, index }) => {
  return (
    <CardHeader
      border="bottom"
      gap="medium"
      background="light-6"
      width="100%"
      direction="column"
    >
      {index === 0 && <Avatar src={avatar02} size="3xl" margin="small" />}
      {index === 1 && <Avatar src={avatar03} size="3xl" margin="small" />}
      {index === 2 && <Avatar src={avatar01} size="3xl" margin="small" />}
      {customer.name}
    </CardHeader>
  );
};

export default CustomerHeader;
