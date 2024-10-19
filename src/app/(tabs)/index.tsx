import { View } from "react-native";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[7]} />
      <ProductListItem product={products[2]} />
      <ProductListItem product={products[5]} />
    </View>
  );
}
