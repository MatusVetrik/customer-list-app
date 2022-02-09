import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import AppHeader from "./AppHeader";
import CustomersList from "./CustomersList";
import Detail from "./Details/Detail";
import { Customer } from "../generated/graphql";

const Structure: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AppHeader text="Customers" />
              <CustomersList setSelectedCustomer={setSelectedCustomer} />
            </>
          }
        />
        <Route
          path="detail"
          element={
            <>
              <AppHeader text="Customer Detail" />
              <Detail customer={selectedCustomer} />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Structure;
