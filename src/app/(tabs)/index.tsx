import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Buttom } from "../../components/Buttom";
// import { Buttom } from '@/components/Buttom';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 44,
          fontWeight: "bold",
          color: "black",
        }}
      >
        HOME
      </Text>

      <Link href={"Product/15"} asChild>
        <Buttom title="Configurações" />
      </Link>
    </View>
  );
};

export default index;
