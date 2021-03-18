import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"

import HeaderPanel from "./HeaderPanel";

export default function Header() {
  return (
    <Box>
      <Typography variant="h2">Eduardo Palma Vieira de Moraes</Typography>
      <Typography variant="h4">Full Stack Developer</Typography>
      <HeaderPanel />
    </Box>
  );
}
