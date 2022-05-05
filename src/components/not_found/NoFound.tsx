import { ReactElement, FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFound: FC = (): ReactElement => {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h3" noWrap component="div">
          Not Found
        </Typography>
      </Box>
    </div>
  );
};

export default NotFound;
