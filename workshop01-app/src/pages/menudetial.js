import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CardActionArea,
  List,
  ListItem,
  Grid,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const MenuDetailPage = () => {
  const model = {
    id: "1",
    name: "Taco Salad",
    price: "6.99",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_1280.jpg",
    description:
      " Mexican-inspired salad made with a base of shredded lettuce, topped with seasoned ground beef or chicken, diced tomatoes, shredded cheese, salsa, and sour cream. It is typically served in a crispy fried tortilla shell or a large taco bowl, but can also be served without the shell for a lighter option. Some variations may include beans, corn, avocado, or other toppings. The dish is often finished with a sprinkle of tortilla chips or strips for added crunch.",
  };
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          color: "black",
          display: "flex",
          alignContent: "center",
          justifyItems: "center",
          height:"54px"
        }}
      >
        <Typography variant="h4" component="h1">
          {model.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={model.imageSrc}
            alt={model.name}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <Card>
          <CardContent>
            <Typography variant="body1">{model.description}</Typography>
            <Typography variant="h6">Price: {model.price}</Typography>
            <List>
              <Typography variant="subtitle1">Ingredients:</Typography>
            </List>

            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MenuDetailPage;
