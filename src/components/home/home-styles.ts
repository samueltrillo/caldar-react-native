import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'white',
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 50,
        marginLeft: 40
    },
    centerContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 80,
    },
    title: {
        paddingBottom: 50,
        fontSize: 50,
        fontWeight: 'bold',
    },
    boilerImg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 200,
        borderRadius: 120,
        backgroundColor: '#fc6225'
    },
    image: {
        height: '80%',
        width: '80%',
    },
    orangePart: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#fc6225',
        marginBottom: 20
    },
    greyPart: {
        color: '#3d4855'
    }
    
})