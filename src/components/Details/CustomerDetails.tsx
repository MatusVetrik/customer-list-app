import { gql, useQuery } from "urql";

import { Box, Paragraph, Text } from "grommet";

import Fetching from "../../server/Fetching";
import { useParams } from "react-router-dom";
import AppHeader from "../AppHeader";

const CustomerDetails = () => {
  const query = gql`
    query MyQuery($cusId: uuid!) {
      order(order_by: {}, where: { customer_id: { _eq: $cusId } }) {
        id
        customer_id
        cost
        order_date
        products_amount
      }
      customer(where: { id: { _eq: $cusId } }) {
        id
        name
        birth_date
        vip
      }
    }
  `;

  const { id } = useParams();

  const [result] = useQuery({
    query: query,
    variables: {
      cusId: id,
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <Fetching height="100vh"></Fetching>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <AppHeader text="Customer Detail" />
      <Box direction="column">
        <Box
          pad="large"
          margin="1rem 0 0 2rem"
          background="accent-3"
          round={{
            size: "large",
            corner: "left",
          }}
          animation={{
            type: "slideLeft",
            duration: 1000,
          }}
        >
          <Paragraph size="large" margin="0.5rem 0 1rem 0">
            Zákazník
          </Paragraph>
          <Text>{data.customer[0].name}</Text>
          <Text>Id: {data.customer[0].id}</Text>
          <Text>Birth: {data.customer[0].birth_date}</Text>
          <Text>VIP: {data.customer[0].vip ? "true" : "false"}</Text>
        </Box>
        {data.order.map((order: any, key: number) => (
          <Box
            key={key}
            pad="large"
            background="brand"
            margin="2rem 0 1rem 10rem"
            round={{
              size: "large",
              corner: "left",
            }}
            animation={{
              type: "slideLeft",
              duration: 1500 + key * 500,
            }}
          >
            <Paragraph size="large" margin="0.5rem 0 1rem 0">
              Objednávka
            </Paragraph>
            <Text>Id: {order.id}</Text>
            <Text>Date: {order.order_date}</Text>
            <Text>Amount: {order.products_amount}</Text>
            <Text>Cost: {order.cost}€</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CustomerDetails;
