import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }} onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color='#161924' />
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.text}>{this.props.name} Screen</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: "500"
    }
})