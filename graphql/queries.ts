import { gql } from "urql";

export const customers = gql`
  query customer {
    customer(distinct_on: id) {
      id
      birth_date
      name
      vip
    }
  }
`;

export const customerDetail = gql`
  query detail {
    order {
      id
      customer_id
      cost
      order_date
      products_amount
    }
    customer {
      id
      name
      birth_date
      vip
    }
  }
`;
