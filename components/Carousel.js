// import React, { useState, useRef } from "react";
// import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
// import Carousel from "react-native-snap-carousel";

// const data = [
//   {
//     title: "Becoming a Wizard at English",
//     image: require("../assets/images/image1.jpg"),
//   },
//   {
//     title: "Mastering Coding Skills",
//     image: require("../assets/images/image1.jpg"),
//   },
//   {
//     title: "Achieving Language Fluency",
//     image: require("../assets/images/image1.jpg"),
//   },
// ];

// const { width: screenWidth } = Dimensions.get("window");

// const CarouselComponent = () => {
//   const carouselRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const renderItem = ({ item }) => (
//     <View style={styles.slide}>
//       <Image source={item.image} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {data && data.length > 0 ? (
//         <Carousel
//           ref={carouselRef}
//           data={data}
//           renderItem={renderItem}
//           sliderWidth={screenWidth}
//           itemWidth={screenWidth * 0.8}
//           onSnapToItem={(index) => setActiveIndex(index)}
//           loop={true}
//         />
//       ) : (
//         <Text>No data available</Text>
//       )}
//       <Text style={styles.paginationText}>
//         {activeIndex + 1}/{data.length}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   slide: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     height: 200,
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 120,
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   paginationText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 20,
//   },
// });

// export default CarouselComponent;
