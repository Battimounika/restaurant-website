import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Introducing a restaurant in an interesting way can be done by highlighting its unique features and experiences. For example: "Step into the world of culinary magic at our award-winning restaurant where our chefs create dishes that are not only delicious, but visually stunning as well.
        </p>
        <br />
        <p>
        A restaurant is a place where you can eat a meal and pay for it. In restaurants your food is usually served to you at your table by a waiter or waitress. They ate in an Italian restaurant in Forth Street. We had dinner in the hotel's restaurant.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
