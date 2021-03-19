import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"

import InfoPanel from "./InfoPanel";

export default function Header() {
  return (
    <Box>
      <Typography variant="h3">Eduardo Palma Vieira de Moraes</Typography>
      <Typography variant="h5" color="textSecondary">Full Stack Developer</Typography>
      <InfoPanel />
    </Box>
  );
}
