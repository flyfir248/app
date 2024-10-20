import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ProductDetailsScreem = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text style={{ fontsize: 20 }}>Product Details Screem for id : {id}</Text>
    </View>
  );
};

export default ProductDetailsScreem;
