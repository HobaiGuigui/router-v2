import { View, Text, Button } from "react-native";

import { Link } from "expo-router";

export default function tabs() {
    return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize:26, fontWeight:"bold", fontStyle:"italic", color:"#000000"}}>
        Home
            </Text>

            <Link href={"settings"} asChild>
            <Button  title='Configurações'/>
            </Link>
        </View>
    )
}