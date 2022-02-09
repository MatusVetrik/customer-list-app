import { Box, Paragraph, Clock } from "grommet";

interface AppHeaderProps {
  text: string;
}

const AppHeader = ({ text }: AppHeaderProps) => (
  <Box
    animation={["fadeIn", "slideDown"]}
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ vertical: "medium", horizontal: "medium" }}
    elevation="medium"
  >
    <Paragraph color="inherit" size="1.2em">
      {text}
    </Paragraph>
    <Box direction="column">
      <Clock type="digital" />
    </Box>
  </Box>
);

export default AppHeader;
