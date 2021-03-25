import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './home-styles';

const Home: React.FC = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.centerContainer}>
                <Text style={styles.title}>
                    Welcome to
                </Text>
                <Text style={styles.orangePart}>
                    Cald 
                    <Text style={styles.greyPart}>
                        Ar
                    </Text>
                </Text>
                <View style={styles.boilerImg}>
                    <Image 
                        source={require('../../../images/boiler.png')}
                        style={styles.image}
                    />
                </View>
            </View>
        </View>
    )
};

export default Home;