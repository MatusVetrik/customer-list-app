import React from "react";

import { Link } from "react-router-dom";

import { CardFooter, Button } from "grommet";
import { Customer } from "../../generated/graphql";

interface Props {
  customer: Customer;
  setSelectedCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
}
const CustomerFooter: React.FC<Props> = ({ customer, setSelectedCustomer }) => {
  return (
    <CardFooter pad={{ horizontal: "small" }} background="light-3" margin="8px">
      <Link to="/detail">
        <Button
          primary
          label="Details"
          onClick={() => {
            setSelectedCustomer(customer);
          }}
        ></Button>
      </Link>
      {/* <DropButton
        label="Details"
        focusIndicator
        dropAlign={{ top: "bottom" }}
        dropProps={{ margin: "1.5rem 0", round: "1rem" }}
        dropContent={
          <CustomerDetails
            setSum={setSum}
            customer={customer}
          ></CustomerDetails>
        }
      /> */}
    </CardFooter>
  );
};

export default CustomerFooter;
