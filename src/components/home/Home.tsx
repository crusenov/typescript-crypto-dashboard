import { ReactElement, FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home: FC = (): ReactElement => {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h3" noWrap component="div">
          Welcome to VSG Crypto
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
