import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Icon } from 'native-base';

function Feed({ navigation }) {
    return (
        <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
function Pigeon({ navigation }) {
    return (
        <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Pigeon page</Text>
        </View>
    );
}


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Toggle Menu"
                onPress={() => props.navigation.toggleDrawer()} 
            >
            </DrawerItem>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Feed}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home" style={{ fontSize: size, color: color }} />
                    )
                }}
            />
            <Drawer.Screen
                name="Pigeon"
                component={Pigeon}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="book" style={{ fontSize: size, color: color }} />
                    )
                }}
            />
            <Drawer.Screen name="Bajigar" component={Feed} 
            options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Icon name="book" style={{ fontSize: size, color: color }} />
                )
            }}/>
            <Drawer.Screen name="Parrot" component={Feed} 
            options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Icon name="book" style={{ fontSize: size, color: color }} />
                )
            }}/>
            <Drawer.Screen name="Love Bird" component={Feed} 
            options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Icon name="book" style={{ fontSize: size, color: color }} />
                )
            }}/>
            <Drawer.Screen name="Hen" component={Feed} 
            options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Icon name="book" style={{ fontSize: size, color: color }} />
                )
            }}/>
        </Drawer.Navigator>
    );
}
