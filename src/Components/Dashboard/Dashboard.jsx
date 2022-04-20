import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const imgURL =
    "https://media.istockphoto.com/photos/stuffed-piggy-bank-with-us-dollars-picture-id182905321?b=1&k=20&m=182905321&s=170667a&w=0&h=KUe7r_Ndpp8f-d4f15lPdgC8cvHq5eAqXD3dl5cigGc=";

  const [balance, setBalance] = useState(500);
  return (
    <div sx={{ margin: 0 }}>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px auto",
          }}
        >
          <Typography variant="h1">{`$ ${balance}`}</Typography>
        </Box>
        <div>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={3}
            >
              <Grid sx={4}>
                <Card
                  sx={{
                    maxWidth: 445,
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={imgURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Withdraw
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Withdraw money from your checkings or savings account
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Withdraw</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid sx={4}>
                <Card sx={{ maxWidth: 445, textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={imgURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Deposit
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Deposit money from your checkings or savings account
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Deposit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid sx={4}>
                <Card sx={{ maxWidth: 445, textAlign: "center" }}>
                  <CardMedia component="img" height="140" image={imgURL} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Transfer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Transfer money from checkings to savings or from savings
                      to checkings account.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Transfer</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default Dashboard;
