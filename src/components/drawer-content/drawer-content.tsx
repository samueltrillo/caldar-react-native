import React from 'react';
import { View, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Props } from './types';

const DrawerContent:React.FC<Props> = (props) => {
    return (
        <View>
            <Text>
                Drawer
            </Text>
        </View>
    );
};

export default DrawerContent;