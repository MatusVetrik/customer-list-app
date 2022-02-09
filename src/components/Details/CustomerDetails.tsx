import { Box, Paragraph, Text } from "grommet";

import { useParams } from "react-router-dom";

import { useDetailQuery } from "../../generated/graphql";

import Fetching from "../Fetching";
import AppHeader from "../AppHeader";

const CustomerDetails = () => {
  const [{ data, fetching, error }] = useDetailQuery();

  const { id } = useParams();

  if (fetching) return <Fetching height="100vh"></Fetching>;
  if (error) return <p>Oh no... {error.message}</p>;

  const customer = data?.customer.filter((customer) => customer.id === id);
  const customerOrders = data?.order.filter(
    (order) => order.customer_id === id
  );

  console.log();
  return (
    <>
      <AppHeader text="Customer Detail" />
      <Box direction="column">
        {customer?.map((customer, key) => (
          <Box
            key={key}
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
            <Text>{customer.name}</Text>
            <Text>Id: {customer.id}</Text>
            <Text>Birth: {customer.birth_date}</Text>
            <Text>VIP: {customer.vip ? "true" : "false"}</Text>
          </Box>
        ))}
        {customerOrders?.map((order, key) => (
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
