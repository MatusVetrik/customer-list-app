import { gql } from "urql";

export const customers = gql`
  query MyQuery {
    customer(distinct_on: id) {
      id
      birth_date
      name
      vip
    }
  }
`;

export const customerDetail = gql`
  query MyQuery1($cusId: uuid!) {
    order(order_by: {}, where: { customer_id: { _eq: $cusId } }) {
      id
      customer_id
      cost
      order_date
      products_amount
    }
  }
`;
