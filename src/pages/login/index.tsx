import { Password } from "@mui/icons-material";
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import React from "react"

type LoginType={
    username:string,
    password:string,
}

export const LoginPage: React.FC<{}> = () => {
    const [loginData, setLoginData] = React.useState(
        {
            username: "",
            password: "",
        }
    );

    const dataLogin =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...loginData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLImageElement>)=>{
        e.preventDefault();
        console.log(loginData)
    }

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography sx={{ mt: 1, mb: 1 }} variant="h4">Iniciar sesion</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField name="username" type="text" margin="normal" fullWidth label="User" sx={{ mt: 2, mb: 1.5 }} required onChange={dataLogin}/>
                                <TextField name="password" type="password"  margin="normal" fullWidth label="Password" sx={{ mt: 1.5, mb: 1.5 }} required onChange={dataLogin}/>
                                <Button type="submit" variant="contained" sx={{ mt: 1.5, mb: 3 }}>Iniciar sesion</Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}