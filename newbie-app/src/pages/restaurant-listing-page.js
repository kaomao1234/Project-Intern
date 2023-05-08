import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import { RestaurantListingViewModel } from "@/viewmodels/restaurant-listing-viewmodel";
import { RestaurantCard } from "@/components/ui/index";
import { useRouter } from "next/router";

const RestaurantListingPage = () => {
  const viewmodel = RestaurantListingViewModel();
  const router = useRouter();

  return (
    <Box m={4}>
      <Typography variant="h4" component="h1" mb={4}>
        Restaurant Listings
      </Typography>
      <Grid container spacing={4}>
        {viewmodel.restaurants.map((restaurant, index) => (
          <RestaurantCard
            onClick={() => {
              router.push("/restaurant-details-page");
            }}
            key={index}
            id={index}
            imageSrc={restaurant.imageSrc}
            name={restaurant.name}
            rating={restaurant.rating}
            location={restaurant.location}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantListingPage;
