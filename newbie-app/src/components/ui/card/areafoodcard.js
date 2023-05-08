import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
const AreaFoodCard = (props) => {
  return (
    <Grid item xs={12} md={6}>
      <Card onClick={props.onClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.imageSrc}
            alt={props.area}
          />
          <CardContent>
            <Typography variant="h6" component="h3" mb={2}>
              {props.area}
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AreaFoodCard;
