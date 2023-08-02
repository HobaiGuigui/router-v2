import React, { forwardRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

type props = TouchableOpacityProps & {
  title: string;
};

export const Buttom = forwardRef<TouchableOpacity, props>(
  ({ title, ...rest }, ref) => {
    return (
      <View>
        <TouchableOpacity
          ref={ref}
          style={{
            width: 200,
            padding: 16,
            backgroundColor: "#8257e5",
            alignItems: "center",
            borderRadius: 9,
            marginTop: 5,
          }}
          {...rest}
        >
          <Text style={{ fontSize: 16, color: "#fff", fontWeight: "700" }}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
);
