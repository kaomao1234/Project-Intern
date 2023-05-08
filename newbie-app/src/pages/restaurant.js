import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";

const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000",
  color: "#fff",
  height: "80px",
});

const Logo = styled(RestaurantIcon)({
  fontSize: "48px",
  marginRight: "10px",
});

const Title = styled(Typography)({
  fontWeight: "bold",
  fontSize: "24px",
});

const MapContainer = styled("iframe")({
  height: "calc(100vh - 80px)", // Subtract the height of the AppBar
  width: "100%",
  border: "none",
});

const RestaurantCardContainer = styled(Card)({
  margin: "20px",
  maxWidth: "400px",
  transition: "box-shadow 0.3s ease",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  },
});

const RestaurantCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
});

const RestaurantCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
});

const RestaurantName = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "10px",
});

const RestaurantAddress = styled(Typography)({
  marginBottom: "10px",
});

const RestaurantPhone = styled(Typography)({
  display: "flex",
  alignItems: "center",
});

const PhoneLabel = styled(Typography)({
  marginRight: "10px",
});

const RestaurantWebsite = styled(Typography)({
  display: "flex",
  alignItems: "center",
});

const WebsiteLabel = styled(Typography)({
  marginRight: "10px",
});

const RestaurantCard = ({ name, address, phone, website, onClick }) => {
  return (
    <RestaurantCardContainer onClick={onClick}>
      <RestaurantCardContent>
        <RestaurantName variant="h6">{name}</RestaurantName>
        <RestaurantAddress>{address}</RestaurantAddress>
        <RestaurantPhone>
          <PhoneLabel>Phone:</PhoneLabel>
          <PhoneIcon fontSize="small" />
          <Typography variant="body2" style={{ marginLeft: "5px" }}>
            {phone}
          </Typography>
        </RestaurantPhone>
        <RestaurantWebsite>
          <WebsiteLabel>Website:</WebsiteLabel>
          <PublicIcon fontSize="small" />
          <Typography variant="body2" style={{ marginLeft: "5px" }}>
            {website}
          </Typography>
        </RestaurantWebsite>
      </RestaurantCardContent>
      <RestaurantCardActions>
        <Typography variant="body2">Show on map</Typography>
        <Button size="small" color="primary">
          View
        </Button>
      </RestaurantCardActions>
    </RestaurantCardContainer>
  );
};
const restaurants = [
  {
    name: "Restaurant A",
    location: {
      lat: 40.748817,
      lng: -73.985428,
    },
    address: "123 Main Street",
    phone: "555-555-1234",
    website: "https://www.restaurant-a.com",
  },
  {
    name: "Restaurant B",
    location: {
      lat: 40.757008,
      lng: -73.985198,
    },
    address: "456 Park Avenue",
    phone: "555-555-5678",
    website: "https://www.restaurant-b.com",
  },
  {
    name: "Restaurant C",
    location: {
      lat: 40.745032,
      lng: -73.988354,
    },
    address: "789 Broadway",
    phone: "555-555-9012",
    website: "https://www.restaurant-c.com",
  },
  {
    name: "Restaurant D",
    location: {
      lat: 40.740925,
      lng: -73,
    },
    address: "321 Fifth Avenue",
    phone: "555-555-3456",
    website: "https://www.restaurant-d.com",
  },
];

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

  const handleMarkerClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <>
      <HeaderContainer>
        <Logo />
        <Title>Restaurant Finder</Title>
      </HeaderContainer>
      <Grid container>
        <Grid item xs={12} md={6}>
          <MapContainer
            src={`http://maps.google.com/maps?q=${selectedRestaurant?.location?.lat},${selectedRestaurant?.location?.lng}&z=17&output=embed`}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              {...restaurant}
              onClick={() => handleMarkerClick(restaurant)}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
