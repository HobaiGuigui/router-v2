import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Buttom  from '../../components/Buttom'

const profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {/* <Image source={img} height={25} width={25} /> */}

    <Text
      style={{
        fontSize: 26,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#000000",
      }}
    >
      Perfil
    </Text>

    <Link href="/" asChild>
      <Button title="Index" />
    </Link>
    
  </View>
  )
}

export default profile;