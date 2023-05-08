export const RestaurantListingViewModel = () => {
  const restaurant = (id, name, location, imageSrc, rating) => {
    return {
      id: id,
      name: name,
      location: location,
      rating: rating,
      imageSrc: imageSrc,
    };
  };

  const restaurants = [
    restaurant(
      1,
      "Restaurant A",
      "123 Main St",
      "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      4.5
    ),
    restaurant(
      2,
      "Restaurant B",
      "456 Elm St",
      "https://mui.com/static/images/cards/paella.jpg",
      3.5
    ),
    restaurant(3, "Restaurant C", "789 Oak St", "", 4.0),
  ];

  return { restaurant, restaurants };
};
