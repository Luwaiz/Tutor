import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginButton = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </View>
</TouchableOpacity>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffff",
        minWidth: 167,
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:1,
        borderColor:"#042637",
        marginTop:14
    },
    buttonText: {
        color: "#042637",
        fontSize: 16,
        fontWeight: "500",
    },
})