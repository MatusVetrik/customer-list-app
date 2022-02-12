import React from "react";
import { Routes, Route } from "react-router-dom";

import CustomersContainer from "./CustomersConatiner";
import CustomerDetails from "./Details/CustomerDetails";

const Structure = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CustomersContainer />} />
        <Route path=":id" element={<CustomerDetails />} />
      </Routes>
    </>
  );
};

export default Structure;
