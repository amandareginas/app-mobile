import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';

import Rodape from '../../Components/rodape';

function Home(props) {
    const { navigation } = props
    return (
        <View>
            <View>
                <StatusBar color="auto" />
                <SafeAreaView style={{ justifyContent: "center", flexDirection: 'row', alignItems: 'center', paddingTop:20, backgroundColor: '#252525', height: 85, }}>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Home' onPress={() => navigation.navigate('Home')}
                    ><Text style={{ color: 'white' }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Produtos' onPress={() => navigation.navigate('Produtos')}
                    ><Text style={{ color: 'white' }}>Produtos</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.Nav}
                        title='Login' onPress={() => navigation.navigate('Login')}
                    ><Text style={{ color: 'white' }}>Login</Text></TouchableOpacity>
                </SafeAreaView>
            </View>
            <View style={styles.corpo}>
                <Text style={styles.textCorpo}>Bem vindo</Text>
                <Image source={require('../../../assets/eletro3.jpg')} style={{width: 320}}/>
            </View>
            <Rodape />
        </View>
    )
}


const styles = StyleSheet.create({
    textCorpo: {
        color: 'white',
        fontSize: 30
    },
    corpo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C2C2C',
        height: '77%'
    },
    Nav: {
        marginLeft: 15,
        backgroundColor: '#252525',
        justifyContent: 'center'
    }
})
export default Home;