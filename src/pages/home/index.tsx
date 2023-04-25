import { Button, Container } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () => {
    return(
        <Container sx={{mt:9}} maxWidth="xl">
            <Button fullWidth variant="contained">
              Home
            </Button>
        </Container>
          )
}