import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabRouteLaout() {
  return (
    
    <Tabs screenOptions={{headerShown: false}}>
  
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({size, color}) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({size, color}) => <MaterialIcons  name="person" size={size} color={color} />,
        }}
      />

<Tabs.Screen
        name="settings"
        options={{
          title: "Configuraçãoes",
          tabBarIcon: ({size, color}) => <MaterialIcons  name="settings-applications" size={size} color={"#acfaca"} />,
        }}
      />
    </Tabs>
  );
}
