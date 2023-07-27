import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

// import { styles } from './styles';

export default function tabs() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:25, fontWeight:"bold", color:"black"}}>
                Configurações
            </Text>

            <Link href={"/index"} asChild>
            <Button  title='Home'/>
            </Link>
    </View>
  );
}