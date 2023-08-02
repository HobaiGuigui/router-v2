import { View, Text, Pressable, Button  } from "react-native";
import React from "react";
import { Link } from "expo-router";

// import Buttom from '../../components/Buttom'
// import Buttom from '@/components/Buttom';

const settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "black"
        }}
      >
        Configurações
      </Text>


        <Link href="/Product/85" asChild>
          <Button title="Ver produto" color={"#8257e5"}/>
      </Link>
      
    </View>
  );
};

export default settings;
