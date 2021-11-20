import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import { Box, Container, Typography } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{mt:"1em"}}>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
          <Typography variant='h1'>Hello World</Typography>
        </Box>

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
