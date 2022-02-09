import { Box, Spinner } from "grommet";

interface FetchingProps {
  height: "100vh" | "13rem";
}

const Fetching = ({ height }: FetchingProps) => {
  return (
    <Box height={height} align="center" justify="center">
      <Spinner size="medium" message="Loading..." />
      <p>Loading...</p>
    </Box>
  );
};

export default Fetching;
