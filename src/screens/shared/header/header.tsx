import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './header-styles';


const Header: React.FC = () => {

    return (
        <View>
            <Text style={styles.headerWhite}>Cald
                <Text style={styles.headerOrange}>Ar</Text>          
            </Text>
        </View>
    )
}

export default Header;