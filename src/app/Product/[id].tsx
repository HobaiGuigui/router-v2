import { View, Text, Pressable, Button, ImageBackground } from "react-native";
import React from "react";
import { Link, useSearchParams } from "expo-router";

const Product = () => {
  const { id } = useSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Produto: {id}
      </Text>

      <Link href="/settings" asChild>
        <Button title="Voltar" color={"#8257e5"}  />
      </Link>
    </View>
  );
};

export default Product;
