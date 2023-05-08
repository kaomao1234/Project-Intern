import { HeaderBox, ImageCard, ImageCardContent } from "../components/ui";

import { HomeViewModel } from "../viewmodels/home-viewmodel";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import AreaFoodCard from "@/components/ui/card/areafoodcard";

import { useRouter, withRouter } from "next/router";

const Logo = styled(RestaurantIcon)({
  fontSize: "48px",
  marginRight: "10px",
});

const ImageIcon = styled(RestaurantIcon)({
  fontSize: "128px",
});

const HomePage = () => {
  let viewmodel = HomeViewModel();

  const router = useRouter();
  return (
    <div>
      <HeaderBox>
        <Logo />
        <Typography variant="h4" component="h1">
         Restaurant recommendations
        </Typography>
      </HeaderBox>
      <Box m={4}>
        <Typography variant="h5" component="h2" mb={2}>
          Discover new restaurants near you
        </Typography>
        <Typography variant="body1" component="p" mb={4}>
          We provide recommendations for the best restaurants in your area,
          based on user ratings and reviews.
        </Typography>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} md={6}>
            <ImageCard>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https:mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="Contemplative Reptile"
                />
                <ImageCardContent>
                  <ImageIcon />
                  <Typography variant="h5" component="h3" mt={2}>
                    Featured Restaurant
                  </Typography>
                </ImageCardContent>
              </CardActionArea>
            </ImageCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h3" mb={2}>
              How it works
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              1. Enter your location to get personalized recommendations.
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              2. Browse recommended restaurants and read user reviews.
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              3. Save your favorite restaurants and share with friends.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2" mb={2}>
          Popular Area Food
        </Typography>
        <Typography variant="body1" component="p" mb={4}>
          Browse our recommendations by cuisine type.
        </Typography>
        <Grid container spacing={2}>
          {viewmodel.areaEats.map((item, index) => {
            return (
              <AreaFoodCard
                onClick={() => {
                  router.push("/restaurant-listing-page");
                }}
                key={index}
                area={item.area}
                imageSrc={item.imageSrc}
                description={item.description}
              />
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
export default withRouter(HomePage);
