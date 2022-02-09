import React from "react";
import { Box, Spinner } from "grommet";

interface Props {
  height: "100vh" | "13rem";
}

const Fetching: React.FC<Props> = ({ height }) => {
  return (
    <Box height={height} align="center" justify="center">
      <Spinner size="medium" message="Loading..." />
      <p>Loading...</p>
    </Box>
  );
};

export default Fetching;
