export const HomeViewModel = () => {
  const areaEat = (area, description, imageSrc) => {
    return {
      area: area,
      description: description,
      imageSrc: imageSrc,
    };
  };

  const areaEats = [
    areaEat(
      "Italian Food",
      "Discover the best Italian restaurants in your area with our recommendations.",
      "https://images.ctfassets.net/qr8kennq1pom/KqNSqM1W1BILITSXgFwpE/92b7e5891bdfafbe1a39366b2b5e8db2/People_having_an_Italian_meal.jpg?fm=webp&q=70&w=1680"
    ),
    areaEat(
      "Mexican Food",
      "Check out our top recommendations for Mexican cuisine in your area.",
      "https://resizer.otstatic.com/v2/photos/wide-huge/4/30103863.jpg"
    ),
    areaEat(
      "New York City",
      "Experience the diverse culinary scene of New York City, from pizza to fine dining.",
      "https://cdn.pixabay.com/photo/2021/01/23/20/17/cannoli-5943590_960_720.jpg"
    ),
    areaEat(
      "Tokyo",
      "Discover the incredible food culture of Tokyo, with its sushi, ramen, and izakayas.",
      "https://cdn.pixabay.com/photo/2020/03/22/08/43/sushi-4956246_960_720.jpg"
    ),
    areaEat(
      "Paris",
      "Indulge in the delicious French cuisine of Paris, from croissants to escargot.",
      "https://cdn.pixabay.com/photo/2021/02/28/10/41/lamb-leg-6056846_960_720.jpg"
    ),
  ];

  return { areaEat, areaEats };
};
