import Typography from "@material-ui/core/Typography";

import HeaderPanel from "./HeaderPanel";

export default function Header() {
  return (
    <header className="cv-header">
      <Typography variant="h2">Eduardo Palma Vieira de Moraes</Typography>
      <Typography variant="h4">Full Stack Developer</Typography>
      <HeaderPanel />
    </header>
  );
}
