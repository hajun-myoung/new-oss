import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundImage: "url('/Images/oss19-logo.png')",
            backgroundSize: "100% 100%",
            width: 96,
            aspectRatio: 1,
            marginRight: 1,
          }}
        />
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Your Chef, OSS19!
        </Typography>
      </Box>
      <Button variant="contained" component={Link} to="/input">
        재료 / 식기 추가하고 시작하기
      </Button>
    </Box>
  );
}
