import { Routes, Route } from "react-router-dom";

import CustomersList from "./CustomersList";
import CustomerDetails from "./Details/CustomerDetails";

const Structure = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CustomersList />} />
        <Route path=":id" element={<CustomerDetails />} />
      </Routes>
    </>
  );
};

export default Structure;
