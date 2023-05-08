import {
  Card,
  CardContent,
  Grid,
  CardActionArea,
  Typography,
  CardMedia,
  Rating,
} from "@mui/material";
import { styled } from "@mui/system";
import RestaurantIcon from "@mui/icons-material/Restaurant";
const RestaurantImage = styled(CardMedia)({
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ImageIcon = styled(RestaurantIcon)({
  fontSize: "128px",
});

const RestaurantCard = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={props.id}>
      <Card onClick={props.onClick}>
        <CardActionArea>
          {props.imageSrc ? (
            <RestaurantImage
              component="img"
              image={props.imageSrc}
              alt={props.name}
            />
          ) : (
            <RestaurantImage>
              <ImageIcon />
            </RestaurantImage>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              {props.location}
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={props.rating}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default RestaurantCard;
