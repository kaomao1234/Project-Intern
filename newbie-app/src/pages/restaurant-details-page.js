import { styled } from "@mui/system";
import {
  Grid,
  Typography,
  Button,
  Rating,
  Divider,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

const ImageContainer = styled(Grid)({
  height: "calc(50vh - 64px)",
  backgroundImage: `url("https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/pass/Ditas%20Interior%20Image%20-%201%20(8).png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const ImageOverlay = styled("div")({
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "#fff",
});

const InfoContainer = styled(Grid)({
  padding: "30px 30px",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
  width: "100%",
});

const InfoTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: "10px",
});

const InfoValue = styled(Typography)({
  marginLeft: "5px",
});

const InfoIcon = styled("span")({
  display: "inline-flex",
  alignItems: "center",
});

const ActionButton = styled(Button)({
  backgroundColor: "#f9a826",
  color: "#fff",
  borderRadius: "20px",
  padding: "10px 30px",
  fontWeight: 700,
  textTransform: "uppercase",
  marginTop: "20px",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "#ef8e17",
  },
});

const RestaurantDetailsPage = () => {
  return (
    <Grid container sx={{ padding: "30px" }}>
      <ImageContainer item xs={12}>
        <ImageOverlay>
          <Typography variant="h2">Restaurant Name</Typography>
          <Rating value={4.5} precision={0.5} readOnly />
        </ImageOverlay>
      </ImageContainer>
      <InfoContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} >
            <InfoTitle variant="h4">
              <InfoIcon>
                <LocationOnIcon />
              </InfoIcon>
              <InfoValue>Restaurant Location</InfoValue>
            </InfoTitle>
            <InfoTitle variant="h4">
              <InfoIcon>
                <AccessTimeIcon />
              </InfoIcon>
              <InfoValue>Restaurant Hours</InfoValue>
            </InfoTitle>
            <InfoTitle variant="h4">
              <InfoIcon>
                <PhoneIcon />
              </InfoIcon>
              <InfoValue>Restaurant Phone Number</InfoValue>
            </InfoTitle>
            <InfoTitle variant="h4">
              <InfoIcon>
                <LanguageIcon />
              </InfoIcon>
              <InfoValue>Restaurant Website URL</InfoValue>
            </InfoTitle>
          </Grid>
          <Grid item xs={12} md={5} >
            <iframe
              style={{
                height: "calc(100vh - 80px)", // Subtract the height of the AppBar
                width: "100%",
                border: "none",
              }}
              src={`http://maps.google.com/maps?q=40.740925,
                -73,&z=17&output=embed`}
            ></iframe>
          </Grid>
          <Grid item xs={12} md={4} >
            <InfoTitle variant="h4">About</InfoTitle>
            <Divider sx={{ marginBottom: "20px" }} />
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              auctor semper velit, ut rhoncus nulla venenatis ac. Sed vitae
              accumsan nibh, in facilisis est. Sed quis suscipit mauris. Ut
              ultricies urna ut metus ullamcorper, at eleifend dolor finibus.
              Donec commodo sed nisl a hendrerit. Duis ut leo bibendum,
              sollicitudin magna at, dictum enim. Nunc id commodo risus. Nulla
              commodo, ex eget pulvinar suscipit, justo urna blandit dolor, eget
              malesuada velit velit sed leo. Etiam lobortis massa euismod elit
              consectetur, vel tincidunt ex posuere. Suspendisse vel mi
              malesuada, sagittis nisi ac, gravida enim.
            </Typography>
            <ActionButton>Book a table</ActionButton>
          </Grid>
        </Grid>
      </InfoContainer>
    </Grid>
  );
};

export default RestaurantDetailsPage;
