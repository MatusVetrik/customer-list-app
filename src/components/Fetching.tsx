import { Box, Spinner } from "grommet";

interface FetchingProps {
  height: "100vh" | "2rem";
  size?: "medium" | "small";
}

const Fetching = ({ height, size = "medium" }: FetchingProps) => (
  <Box height={height} align="center" justify="center">
    <Spinner size={size} message="Loading..." />
    {size === "medium" && <p>Loading...</p>}
  </Box>
);

export default Fetching;
