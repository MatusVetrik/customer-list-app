import React from "react";
import { CardBody, Text, Box } from "grommet";

import { Customer, DetailQuery } from "../../generated/graphql";
import Fetching from "../Fetching";

interface CustomerBodyProps {
  customer: Customer;
  data: DetailQuery | undefined;
  fetching: boolean;
}

const CustomerBody = ({ customer, data, fetching }: CustomerBodyProps) => {
  const summary = (): number => {
    return data?.order
      .filter((order) => order.customer_id === customer.id)
      .reduce((pre: any, cur) => pre + cur.cost, 0);
  };

  return (
    <CardBody pad="medium" background="light-3" width="100%">
      <Box alignSelf="center" width="auto">
        {customer.vip ? (
          <Text margin="4px" color="gold" size="xxlarge">
            VIP
          </Text>
        ) : (
          <s>
            <Text color="gold" size="xxlarge">
              VIP
            </Text>
          </s>
        )}
      </Box>
      <Text margin="5px">Id: {customer.id}</Text>
      <Text margin="5px">Birth: {customer.birth_date}</Text>
      {fetching ? (
        <Fetching height="2rem" size="small" />
      ) : (
        <Text margin="5px">Summary: {summary()}€</Text>
      )}
    </CardBody>
  );
};

export default CustomerBody;
