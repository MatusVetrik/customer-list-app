import React from "react";

import { gql, useQuery } from "urql";

import { CardBody, Text, Box } from "grommet";

import Fetching from "../../server/Fetching";
import { Customer } from "../../generated/graphql";

interface Props {
  customer: Customer;
}

const CustomerBody: React.FC<Props> = ({ customer }) => {
  const query = gql`
    query MyQuery($cusId: uuid!) {
      order(order_by: {}, where: { customer_id: { _eq: $cusId } }) {
        id
        customer_id
        cost
        order_date
        products_amount
      }
    }
  `;

  const [result] = useQuery({
    query: query,
    variables: {
      cusId: customer.id,
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <Fetching height="13rem"></Fetching>;
  if (error) return <p>Oh no... {error.message}</p>;

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
      <Text margin="5px">
        Summary: {data.order.reduce((pre: any, cur: any) => pre + cur.cost, 0)}€
      </Text>
    </CardBody>
  );
};

export default CustomerBody;
