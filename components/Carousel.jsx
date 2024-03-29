import * as React from "react";
import { Dimensions, Text, View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Index() {
    const width = Dimensions.get("window").width - 38;
    const data = [
        {
            image: require("../assets/images/image-product-1.jpg")
        },
        {
            image: require("../assets/images/image-product-2.jpg")
        },
        {
            image: require("../assets/images/image-product-3.jpg")
        },
        {
            image: require("../assets/images/image-product-4.jpg")
        },

    ]
    const height = width / 2;
    return (
        <View style={{ flex: 1, marginTop: 20, }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                style={{
                    borderRadius: 10,
                    elevation: 5,
                }}
                renderItem={({ value, index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <Image source={data[index].image} style={styles.image} />
                    </View>
                )}
            />
        </ View >
    );
}

export default Index;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
        top: 0,
        left: 0,
    }
});